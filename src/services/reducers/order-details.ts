import {
  GET_ORDER_SUCCESS,
  DELETE_ORDER_SUCCESS,
} from "../constants/constants";
import { TUnionAction } from "../actions/interfaces";

type TInitialState = {
  number: string;
};

export const initialState: TInitialState = {
  number: "",
};

export const orderDetailsReducer = (
  state = initialState,
  action: TUnionAction
): TInitialState => {
  switch (action.type) {
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        number: action.payload,
      };
    }
    case DELETE_ORDER_SUCCESS: {
      return {
        ...state,
        number: "",
      };
    }
    default: {
      return state;
    }
  }
};
