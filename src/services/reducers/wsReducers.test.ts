import {
  initialState,
  wsReducer,
  initialStateUser,
  wsReducerUser,
} from "./wsReducers";
import {
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetOrders,
  wsConnectionSuccessUser,
  wsConnectionErrorUser,
  wsConnectionClosedUser,
  wsGetOrdersUser,
} from "../actions/wsActions";
import { allOrders, userOrders } from "../../utils/test-constants";

describe("websockets reducer test", () => {
  it("should handle ws connection success", () => {
    expect(wsReducer(initialState, wsConnectionSuccess())).toEqual({
      ...initialState,
      wsConnection: true,
    });
  });
  it("should handle ws connection error", () => {
    expect(wsReducer(initialState, wsConnectionError())).toEqual({
      ...initialState,
      wsConnection: false,
    });
  });
  it("should return the initial state if ws connection closed", () => {
    expect(wsReducer(initialState, wsConnectionClosed())).toEqual(initialState);
  });
  it("should handle ws get all orders", () => {
    expect(wsReducer(initialState, wsGetOrders(allOrders))).toEqual({
      ...initialState,
      orders: allOrders.orders,
      total: allOrders.total,
      totalToday: allOrders.totalToday,
    });
  });
});

describe("user websockets reducer test", () => {
  it("should handle user ws connection success", () => {
    expect(wsReducerUser(initialStateUser, wsConnectionSuccessUser())).toEqual({
      ...initialStateUser,
      wsConnection: true,
    });
  });
  it("should handle user ws connection error", () => {
    expect(wsReducerUser(initialStateUser, wsConnectionErrorUser())).toEqual({
      ...initialStateUser,
      wsConnection: false,
    });
  });
  it("should return the initial state user if ws connection closed", () => {
    expect(wsReducerUser(initialStateUser, wsConnectionClosedUser())).toEqual(
      initialStateUser
    );
  });
  it("should handle ws get user orders", () => {
    expect(
      wsReducerUser(initialStateUser, wsGetOrdersUser(userOrders))
    ).toEqual({
      ...initialStateUser,
      orders: userOrders.orders,
    });
  });
});
