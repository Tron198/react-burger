import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants/constants";
import { getCookie } from "../../utils/cookie";
import { TUnionAction } from "../actions/interfaces";

type TInitialState = {
  login: boolean;
};

const initialState: TInitialState = {
  login: getCookie("access") ? true : false,
};

export const getLoginReducer = (
  state = initialState,
  action: TUnionAction
): TInitialState => {
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
