import { apiBurger } from "../../utils/api";
import { deleteCookie } from "../../utils/cookie";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});

export function userLogout() {
  return (dispatch) =>
    apiBurger
      .logoutRequest()
      .then(({ success }) => {
        if (success) {
          deleteCookie("access");
          deleteCookie("refresh");
          dispatch(logoutSuccess(success));
        }
      })
      .catch((error) => {
        console.log(error);
      });
}
