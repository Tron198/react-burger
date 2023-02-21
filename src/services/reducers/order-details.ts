import { GET_ORDER_SUCCESS } from "../constants/constants";
import { TUnionAction } from "../actions/interfaces";

type TInitialState = {
  id: string;
};

const initialState: TInitialState = {
  id: "",
};

export const orderDetailsReducer = (
  state = initialState,
  action: TUnionAction
): TInitialState => {
  switch (action.type) {
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        id: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
