import { apiBurger } from "../../utils/api";
import { REGISTRATION_SUCCESS } from "../constants/constants";
import { TUser } from "../types/types";
import { IRegistrationSuccess } from "../actions/interfaces";
import { AppThunk } from "../types/types";

export const registrationSuccess = (payload: TUser): IRegistrationSuccess => ({
  type: REGISTRATION_SUCCESS,
  payload,
});

export const createNewAccount: AppThunk = (
  name: string,
  email: string,
  password: string
) => {
  return (dispatch) =>
    apiBurger
      .registerRequest(name, email, password)
      .then((data) => {
        dispatch(registrationSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
};
