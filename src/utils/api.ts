import { getCookie, setCookie, deleteCookie } from "./cookie";

interface TApiConfig {
  baseUrl: string,
  defaultHeaders: {
    'Content-Type': string
  },
  ingredients: string,
  order: string,
  register: string,
  authorization: string,
  logout: string,
  token: string,
  user: string,
  passwordForgot: string,
  passwordReset: string
}

const apiConfig = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  defaultHeaders: {
    'Content-Type': 'application/json'
  },
  ingredients: '/ingredients',
  order: '/orders',
  register: '/auth/register',
  authorization: '/auth/login',
  logout: '/auth/logout',
  token: '/auth/token',
  user: '/auth/user',
  passwordForgot: '/password-reset',
  passwordReset: '/password-reset/reset',
}

interface IOptions {
  method: string,
  headers: {
    'Content-Type': string,
    authorization?: string
  },
  body?: string
}

class Api {
  readonly baseUrl: string
  readonly defaultHeaders: {
    'Content-Type': string
  }
  readonly ingredientsEndpoint: string
  readonly orderEndpoint: string
  readonly authorizationEndpoint: string
  readonly registerEndroint: string
  readonly logoutEndpoint: string
  readonly tokenEndpoint: string
  readonly userEndpoint: string
  readonly passwordForgotEndpoint: string
  readonly passwordResetEndpoint: string

  constructor({
    baseUrl, ingredients, order,
    authorization, register, logout,
    token, user, passwordForgot,
    passwordReset, defaultHeaders
  }: TApiConfig) {
    this.baseUrl = baseUrl;
    this.ingredientsEndpoint = ingredients;
    this.orderEndpoint = order;
    this.authorizationEndpoint = authorization;
    this.registerEndroint = register;
    this.logoutEndpoint = logout;
    this.tokenEndpoint = token;
    this.userEndpoint = user;
    this.passwordForgotEndpoint = passwordForgot;
    this.passwordResetEndpoint = passwordReset;
    this.defaultHeaders = defaultHeaders;
  }

  _makeUrl(endpoint: string) {
    return `${this.baseUrl}${endpoint}`;
  }

  _request(url: string, options: IOptions) {
    return fetch(url, options).then(this._handleResponse)
  }

  _requestRefreshToken(url: string, options: IOptions) {
    return fetch(url, options).then(this._handleResponse)
      .catch((error) => {
        if (error === '403')
          console.log(error)
        deleteCookie('access');
        this.refreshToken()
          .then(({ accessToken }) => {
            setCookie('access', accessToken.split('Bearer ')[1])
          })
          .then(() => this._request(url, options))
      })
  }

  _handleResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getIngredients() {
    const options = {
      method: 'GET',
      headers: this.defaultHeaders
    }
    return this._request(this._makeUrl(this.ingredientsEndpoint), options)
  }

  requestOrderDetails(idList: string[]) {
    const options = {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + getCookie('access'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: idList
      })
    }
    return this._request(this._makeUrl(this.orderEndpoint), options)
  }

  registerRequest(name: string, email: string, password: string) {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        name,
        email,
        password
      })
    }
    return this._request(this._makeUrl(this.registerEndroint), options)
  }

  passwordForgotRequest(email: string) {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        email
      })
    }
    return this._request(this._makeUrl(this.passwordForgotEndpoint), options)
  }

  passwordResetRequest(password: string, token: string) {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        password,
        token
      })
    }
    return this._request(this._makeUrl(this.passwordResetEndpoint), options)
  }

  getLogin(email: string, password: string) {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        email,
        password
      })
    }
    return this._request(this._makeUrl(this.authorizationEndpoint), options)
  }

  logoutRequest() {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        token: getCookie('refresh')
      })
    }
    return this._requestRefreshToken(this._makeUrl(this.logoutEndpoint), options)
  }

  refreshToken() {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        token: getCookie('refresh'),
      })
    }
    return this._request(this._makeUrl(this.tokenEndpoint), options)
  }

  getUserData() {
    const options = {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + getCookie('access'),
        'Content-Type': 'application/json'
      },
    }
    return this._request(this._makeUrl(this.userEndpoint), options)
  }

  patchUserData(name: string, email: string, password: string) {
    const options = {
      method: 'PATCH',
      headers: {
        authorization: 'Bearer ' + getCookie('access'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }
    return this._request(this._makeUrl(this.userEndpoint), options)
  }
}

export const apiBurger = new Api(apiConfig)