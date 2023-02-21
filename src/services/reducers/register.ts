import { REGISTRATION_SUCCESS } from "../constants/constants";
import { TUnionAction } from "../actions/interfaces";
import { TUser } from "../types/types";

type TInitialState = TUser;

const initialState: TInitialState = {
  user: {
    name: "",
    email: "",
  },
  success: false,
};

export const registrationReducer = (
  state = initialState,
  action: TUnionAction
): TInitialState => {
  switch (action.type) {
    case REGISTRATION_SUCCESS: {
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
