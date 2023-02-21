import { apiBurger } from "../../utils/api";
import { PASSWORD_FORGOT_SUCCESS } from "../constants/constants";
import { IPasswordForgotSuccess } from "../actions/interfaces";
import { AppThunk } from "../types/types";

export const passwordForgotSuccess = (
  payload: boolean
): IPasswordForgotSuccess => ({
  type: PASSWORD_FORGOT_SUCCESS,
  payload,
});

export const createNewPassword: AppThunk = (email: string) => {
  return (dispatch) =>
    apiBurger
      .passwordForgotRequest(email)
      .then((payload) => {
        dispatch(passwordForgotSuccess(payload));
      })
      .catch((error) => {
        console.log(error);
      });
};
