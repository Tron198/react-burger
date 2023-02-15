import { apiBurger } from "../../utils/api";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const PATCH_USER_REQUEST = "PATCH_USER_REQUEST";
export const PATCH_USER_SUCCESS = "PATCH_USER_SUCCESS";
export const PATCH_USER_ERROR = "PATCH_USER_ERROR";

const userSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

export function getUserInfo() {
  return (dispatch) =>
    apiBurger
      .getUserData()
      .then((data) => {
        dispatch(userSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
}

export function patchUserInfo(name, email, password) {
  return (dispatch) =>
    apiBurger
      .patchUserData(name, email, password)
      .then((data) => {
        dispatch(userSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
}
