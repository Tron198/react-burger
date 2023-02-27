import { Middleware, MiddlewareAPI } from "redux";
import { TMiddlewareActions } from "../actions/interfaces";
import { AppDispatch, RootState } from "../types/types";

export const socketMiddleware = (
  wsUrl: () => string,
  wsActions: TMiddlewareActions
): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onOrders } = wsActions;
      if (type === wsInit) {
        socket = new WebSocket(wsUrl());
        if (socket) {
          socket.onopen = () => {
            dispatch({ type: onOpen });
          };
          socket.onerror = () => {
            dispatch({ type: onError });
          };
          socket.onmessage = (event) => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success } = parsedData;
            success && dispatch({ type: onOrders, payload: parsedData });
          };
          socket.onclose = () => {
            dispatch({ type: onClose });
          };
        }
      }
      return next(action);
    };
  };
};
