import { apiBurger } from "../../utils/api";
import { setCookie } from "../../utils/cookie";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const getLoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export function getUserLogin(email, password) {
  return (dispatch) =>
    apiBurger
      .getLogin(email, password)
      .then((data) => {
        const { success, refreshToken, accessToken } = data;
        if (success) {
          setCookie("access", accessToken.split("Bearer ")[1]);
          setCookie("refresh", refreshToken);
          dispatch(getLoginSuccess(data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
}
