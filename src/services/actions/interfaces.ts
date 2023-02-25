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
  DELETE_ORDER_SUCCESS,
  PASSWORD_FORGOT_SUCCESS,
  PASSWORD_RESET_SUCCESS,
  REGISTRATION_SUCCESS,
  GET_USER_SUCCESS,
  PATCH_USER_SUCCESS,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
  WS_CONNECTION_START_USER,
  WS_CONNECTION_SUCCESS_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_CLOSED_USER,
  WS_GET_ORDERS_USER,
} from "../constants/constants";
import { TIngredientType, TUser, TOrders } from "../types/types";
import { IWsActions, IWsActionsUser } from "./wsActions";

export interface ISetIngredientDetails {
  readonly type: typeof SET_INGREDIENT_DETAILS;
  readonly payload: TIngredientType;
}

export interface IDeleteIngredientDetails {
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

export interface IDeleteOrderSuccess {
  readonly type: typeof DELETE_ORDER_SUCCESS;
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

export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  readonly payload: TOrders;
}

export interface IWsConnectionStartUser {
  readonly type: typeof WS_CONNECTION_START_USER;
}

export interface IWsConnectionSuccessUser {
  readonly type: typeof WS_CONNECTION_SUCCESS_USER;
}

export interface IWsConnectionErrorUser {
  readonly type: typeof WS_CONNECTION_ERROR_USER;
}

export interface IWsConnectionClosedUser {
  readonly type: typeof WS_CONNECTION_CLOSED_USER;
}

export interface IWsGetOrdersUser {
  readonly type: typeof WS_GET_ORDERS_USER;
  readonly payload: TOrders;
}

export type TUnionAction =
  | ISetIngredientDetails
  | IDeleteIngredientDetails
  | ISetBun
  | IAddIngredient
  | IDeleteIngredient
  | IMoveIngredient
  | IClearConstructor
  | IGetIngredientsSuccess
  | IGetLoginSuccess
  | ILogoutSuccess
  | IGetOrderSuccess
  | IDeleteOrderSuccess
  | IPasswordForgotSuccess
  | IPasswordResetSuccess
  | IRegistrationSuccess
  | IGetUserSuccess
  | IPatchUserSuccess
  | IWsConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetOrders
  | IWsConnectionStartUser
  | IWsConnectionSuccessUser
  | IWsConnectionErrorUser
  | IWsConnectionClosedUser
  | IWsGetOrdersUser;

export type TUnionWsAction =
  | IWsConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetOrders;

export type TUnionWsActionUser =
  | IWsConnectionStartUser
  | IWsConnectionSuccessUser
  | IWsConnectionErrorUser
  | IWsConnectionClosedUser
  | IWsGetOrdersUser;

export type TMiddlewareActions = IWsActions | IWsActionsUser;
