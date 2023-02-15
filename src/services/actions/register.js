import { apiBurger } from "../../utils/api";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";

export const registrationSuccess = (payload) => ({
  type: REGISTRATION_SUCCESS,
  payload,
});

export function createNewAccount(name, email, password) {
  return (dispatch) =>
    apiBurger
      .registerRequest(name, email, password)
      .then((data) => {
        dispatch(registrationSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
}
