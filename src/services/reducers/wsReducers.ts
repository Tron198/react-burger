import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
  WS_CONNECTION_SUCCESS_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_CLOSED_USER,
  WS_GET_ORDERS_USER,
} from "../constants/constants";
import { TUnionAction } from "../actions/interfaces";
import { TOrder } from "../types/types";

type TInitialState = {
  wsConnection: boolean;
  orders: Array<TOrder> | [];
  total?: number | null;
  totalToday?: number | null;
};

export const initialState: TInitialState = {
  wsConnection: false,
  orders: [],
  total: null,
  totalToday: null,
};

export const initialStateUser: TInitialState = {
  wsConnection: false,
  orders: [],
};

export const wsReducer = (
  state = initialState,
  action: TUnionAction
): TInitialState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnection: true,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnection: false,
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnection: false,
        orders: [],
        total: null,
        totalToday: null,
      };
    }
    case WS_GET_ORDERS: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    }
    default: {
      return state;
    }
  }
};

export const wsReducerUser = (
  state = initialStateUser,
  action: TUnionAction
): TInitialState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS_USER: {
      return {
        ...state,
        wsConnection: true,
      };
    }
    case WS_CONNECTION_ERROR_USER: {
      return {
        ...state,
        wsConnection: false,
      };
    }
    case WS_CONNECTION_CLOSED_USER: {
      return {
        ...state,
        wsConnection: false,
        orders: [],
      };
    }
    case WS_GET_ORDERS_USER: {
      return {
        ...state,
        orders: action.payload.orders,
      };
    }
    default: {
      return state;
    }
  }
};
