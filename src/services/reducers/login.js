import { LOGIN_SUCCESS } from "../actions/login";
import { LOGOUT_SUCCESS } from "../actions/logout";
import { getCookie } from "../../utils/cookie";

export const initialState = {
  login: getCookie("access") ? true : false,
};

export const getLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        login: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        login: false,
      };
    }
    default: {
      return state;
    }
  }
};
