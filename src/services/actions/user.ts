import { apiBurger } from "../../utils/api";
import { GET_USER_SUCCESS, PATCH_USER_SUCCESS } from "../constants/constants";
import { TUser } from "../types/types";
import { IGetUserSuccess, IPatchUserSuccess } from "../actions/interfaces";
import { AppThunk } from "../types/types";

export const getUserSuccess = (payload: TUser): IGetUserSuccess => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const patchUserSuccess = (payload: TUser): IPatchUserSuccess => ({
  type: PATCH_USER_SUCCESS,
  payload,
});

export const getUserInfo: AppThunk = () => {
  return (dispatch) =>
    apiBurger
      .getUserData()
      .then((data) => {
        dispatch(getUserSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
};

export const patchUserInfo: AppThunk = (
  name: string,
  email: string,
  password: string
) => {
  return (dispatch) =>
    apiBurger
      .patchUserData(name, email, password)
      .then((data) => {
        dispatch(patchUserSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
};
