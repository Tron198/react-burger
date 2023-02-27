import { GET_USER_SUCCESS, PATCH_USER_SUCCESS } from "../constants/constants";
import { TUnionAction } from "../actions/interfaces";
import { TUser } from "../types/types";

type TInitialState = TUser;

export const initialState: TInitialState = {
  user: {
    name: "",
    email: "",
  },
  success: false,
};

export const getUserInfoReducer = (
  state = initialState,
  action: TUnionAction
): TInitialState => {
  switch (action.type) {
    case GET_USER_SUCCESS: {
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user,
      };
    }
    case PATCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        success: action.payload.success,
      };
    }
    default: {
      return state;
    }
  }
};
