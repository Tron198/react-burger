import { apiBurger } from "../../utils/api";
import { deleteCookie } from "../../utils/cookie";
import { LOGOUT_SUCCESS } from "../constants/constants";
import { ILogoutSuccess } from "../actions/interfaces";
import { AppThunk } from "../types/types";

export const logoutSuccess = (payload: boolean): ILogoutSuccess => ({
  type: LOGOUT_SUCCESS,
  payload,
});

export const userLogout: AppThunk = () => {
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
};
