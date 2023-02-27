import { PASSWORD_RESET_SUCCESS } from "../constants/constants";
import { TUnionAction } from "../actions/interfaces";

type TInitialState = {
  success: boolean;
};

export const initialState: TInitialState = {
  success: false,
};

export const passwordResetReducer = (
  state = initialState,
  action: TUnionAction
): TInitialState => {
  switch (action.type) {
    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        success: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
