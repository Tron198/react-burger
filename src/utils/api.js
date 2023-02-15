import { getCookie } from "./cookie";

export const apiConfig = {
  baseUrl: `https://norma.nomoreparties.space/api`,
  ingredients: '/ingredients',
  order: '/orders',
  register: '/auth/register',
  authorization: '/auth/login',
  logout: '/auth/logout',
  token: '/auth/token',
  user: '/auth/user',
  passwordForgot: '/password-reset',
  passwordReset: '/password-reset/reset',
  defaultHeaders: {
    'Content-Type': 'application/json'
  }
}

class Api {
  constructor({ baseUrl, ingredients, order, authorization, register, logout, token, user, passwordForgot, passwordReset, defaultHeaders }) {
    this._baseUrl = baseUrl;
    this._ingredientsEndpoint = ingredients;
    this._orderEndpoint = order;
    this._authorizationEndpoint = authorization;
    this._registerEndroint = register;
    this._logoutEndpoint = logout;
    this._tokenEndpoint = token;
    this._userEndpoint = user;
    this._passwordForgotEndpoint = passwordForgot;
    this._passwordResetEndpoint = passwordReset;
    this._defaultHeaders = defaultHeaders;
  }

  _makeUrl(endpoint) {
    return `${this._baseUrl}${endpoint}`;
  }

  async _request(url, options) {
    const res = await fetch(url, options);
    return this._handleResponse(res);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getIngredients() {
    const options = {
      method: 'GET',
      headers: this._defaultHeaders
    }
    return this._request(this._makeUrl(this._ingredientsEndpoint), options)
  }

  requestOrderDetails(idList) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        ingredients: idList
      })
    }
    return this._request(this._makeUrl(this._orderEndpoint), options)
  }

  registerRequest(name, email, password) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        name,
        email,
        password
      })
    }
    return this._request(this._makeUrl(this._registerEndroint), options)
  }

  passwordForgotRequest(email) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        email
      })
    }
    return this._request(this._makeUrl(this._passwordForgotEndpoint), options)
  }

  passwordResetRequest(password, token) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        password,
        token
      })
    }
    return this._request(this._makeUrl(this._passwordResetEndpoint), options)
  }

  getLogin(email, password) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        email,
        password
      })
    }
    return this._request(this._makeUrl(this._authorizationEndpoint), options)
  }

  logoutRequest() {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        token: getCookie('refresh')
      })
    }
    return this._request(this._makeUrl(this._logoutEndpoint), options)
  }

  refreshToken() {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        token: getCookie('refresh'),
      })
    }
    return this._request(this._makeUrl(this._tokenEndpoint), options)
  }

  getUserData() {
    const options = {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + getCookie('access'),
        'Content-Type': 'application/json'
      },
    }
    return this._request(this._makeUrl(this._userEndpoint), options)
  }

  patchUserData(name, email, password) {
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
    return this._request(this._makeUrl(this._userEndpoint), options)
  }
}

export const apiBurger = new Api(apiConfig);