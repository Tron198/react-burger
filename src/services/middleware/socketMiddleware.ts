import { Middleware } from "redux";
import { IWsActions } from "../actions/interfaces";

export const socketMiddleware = (
  wsUrl: () => string,
  wsActions: IWsActions
): Middleware => {
  return (store) => {
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
          socket.onmessage = (evt) => {
            const { data } = evt;
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
