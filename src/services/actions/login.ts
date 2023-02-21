import { apiBurger } from "../../utils/api";
import { setCookie } from "../../utils/cookie";
import { LOGIN_SUCCESS } from "../constants/constants";
import { IGetLoginSuccess } from "../actions/interfaces";
import { AppThunk } from "../types/types";

export const getLoginSuccess = (payload: boolean): IGetLoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const getUserLogin: AppThunk = (email: string, password: string) => {
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
};
