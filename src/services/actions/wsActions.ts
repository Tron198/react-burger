import {
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
import { TOrders } from "../types/types";
import {
  IWsConnectionStart,
  IWsConnectionSuccess,
  IWsConnectionError,
  IWsConnectionClosed,
  IWsGetOrders,
  IWsConnectionStartUser,
  IWsConnectionSuccessUser,
  IWsConnectionErrorUser,
  IWsConnectionClosedUser,
  IWsGetOrdersUser,
} from "./interfaces";

export const wsConnectionStart = (): IWsConnectionStart => ({
  type: WS_CONNECTION_START,
});

export const wsConnectionSuccess = (): IWsConnectionSuccess => ({
  type: WS_CONNECTION_SUCCESS,
});

export const wsConnectionError = (): IWsConnectionError => ({
  type: WS_CONNECTION_ERROR,
});

export const wsConnectionClosed = (): IWsConnectionClosed => ({
  type: WS_CONNECTION_CLOSED,
});

export const wsGetOrders = (payload: TOrders): IWsGetOrders => ({
  type: WS_GET_ORDERS,
  payload,
});

export const wsConnectionStartUser = (): IWsConnectionStartUser => ({
  type: WS_CONNECTION_START_USER,
});

export const wsConnectionSuccessUser = (): IWsConnectionSuccessUser => ({
  type: WS_CONNECTION_SUCCESS_USER,
});

export const wsConnectionErrorUser = (): IWsConnectionErrorUser => ({
  type: WS_CONNECTION_ERROR_USER,
});

export const wsConnectionClosedUser = (): IWsConnectionClosedUser => ({
  type: WS_CONNECTION_CLOSED_USER,
});

export const wsGetOrdersUser = (payload: TOrders): IWsGetOrdersUser => ({
  type: WS_GET_ORDERS_USER,
  payload,
});

export const wsActions: IWsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onOrders: WS_GET_ORDERS,
};

export interface IWsActions {
  readonly wsInit: typeof WS_CONNECTION_START;
  readonly onOpen: typeof WS_CONNECTION_SUCCESS;
  readonly onClose: typeof WS_CONNECTION_CLOSED;
  readonly onError: typeof WS_CONNECTION_ERROR;
  readonly onOrders: typeof WS_GET_ORDERS;
}

export const wsActionsUser: IWsActionsUser = {
  wsInit: WS_CONNECTION_START_USER,
  onOpen: WS_CONNECTION_SUCCESS_USER,
  onClose: WS_CONNECTION_CLOSED_USER,
  onError: WS_CONNECTION_ERROR_USER,
  onOrders: WS_GET_ORDERS_USER,
};

export interface IWsActionsUser {
  readonly wsInit: typeof WS_CONNECTION_START_USER;
  readonly onOpen: typeof WS_CONNECTION_SUCCESS_USER;
  readonly onClose: typeof WS_CONNECTION_CLOSED_USER;
  readonly onError: typeof WS_CONNECTION_ERROR_USER;
  readonly onOrders: typeof WS_GET_ORDERS_USER;
}
