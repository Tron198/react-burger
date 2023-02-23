import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsUrl } from "../utils/constants";
import { getCookie } from "../utils/cookie";
import { wsActions, wsActionsUser } from "../services/actions/wsActions";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(() => wsUrl + "/all", wsActions),
    socketMiddleware(
      () => wsUrl + `?token=${getCookie("access")}`,
      wsActionsUser
    )
  )
);

export const store = createStore(rootReducer, enhancer);
