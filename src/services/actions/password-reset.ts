import { apiBurger } from "../../utils/api";
import { PASSWORD_RESET_SUCCESS } from "../constants/constants";
import { IPasswordResetSuccess } from "../actions/interfaces";
import { AppThunk } from "../types/types";

export const passwordResetSuccess = (
  payload: boolean
): IPasswordResetSuccess => ({
  type: PASSWORD_RESET_SUCCESS,
  payload,
});

export const confirmNewPassword: AppThunk = (
  password: string,
  token: string
) => {
  return (dispatch) =>
    apiBurger
      .passwordResetRequest(password, token)
      .then((payload) => {
        dispatch(passwordResetSuccess(payload));
      })
      .catch((error) => {
        console.log(error);
      });
};
