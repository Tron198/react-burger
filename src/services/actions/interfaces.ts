import {
  SET_INGREDIENT_DETAILS,
  DELETE_INGREDIENT_DETAILS,
  SET_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
  CLEAR_CONSTRUCTOR,
  GET_INGREDIENTS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  GET_ORDER_SUCCESS,
  PASSWORD_FORGOT_SUCCESS,
  PASSWORD_RESET_SUCCESS,
  REGISTRATION_SUCCESS,
  GET_USER_SUCCESS,
  PATCH_USER_SUCCESS,
} from "../constants/constants";
import { TIngredientType, TUser } from "../types/types";

export interface ISetIgredientDetails {
  readonly type: typeof SET_INGREDIENT_DETAILS;
  readonly payload: TIngredientType;
}

export interface IDeleteIgredientDetails {
  readonly type: typeof DELETE_INGREDIENT_DETAILS;
}

export interface ISetBun {
  readonly type: typeof SET_BUN;
  readonly payload: TIngredientType;
}

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: TIngredientType;
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: TIngredientType;
}

export interface IMoveIngredient {
  readonly type: typeof MOVE_INGREDIENT;
  readonly payload: {
    start: number;
    end: number;
  };
}

export interface IClearConstructor {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: Array<TIngredientType>;
}

export interface IGetLoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: boolean;
}

export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
  readonly payload: boolean;
}

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: string;
}

export interface IPasswordForgotSuccess {
  readonly type: typeof PASSWORD_FORGOT_SUCCESS;
  readonly payload: boolean;
}

export interface IPasswordResetSuccess {
  readonly type: typeof PASSWORD_RESET_SUCCESS;
  readonly payload: boolean;
}

export interface IRegistrationSuccess {
  readonly type: typeof REGISTRATION_SUCCESS;
  readonly payload: TUser;
}

export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: TUser;
}

export interface IPatchUserSuccess {
  readonly type: typeof PATCH_USER_SUCCESS;
  readonly payload: TUser;
}

export type TUnionAction =
  | ISetIgredientDetails
  | IDeleteIgredientDetails
  | ISetBun
  | IAddIngredient
  | IDeleteIngredient
  | IMoveIngredient
  | IClearConstructor
  | IGetIngredientsSuccess
  | IGetLoginSuccess
  | ILogoutSuccess
  | IGetOrderSuccess
  | IPasswordForgotSuccess
  | IPasswordResetSuccess
  | IRegistrationSuccess
  | IGetUserSuccess
  | IPatchUserSuccess;
