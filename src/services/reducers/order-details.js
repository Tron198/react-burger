import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
} from "../actions/order-details";

export const initialState = {
  id: "",
  orderRequest: false,
  orderError: false,
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderError: false,
        id: action.number,
      };
    }
    case GET_ORDER_ERROR: {
      return {
        ...state,
        orderRequest: false,
        orderError: true,
      };
    }
    default: {
      return state;
    }
  }
};
