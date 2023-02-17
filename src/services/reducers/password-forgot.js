import {
  PASSWORD_FORGOT_REQUEST,
  PASSWORD_FORGOT_SUCCESS,
  PASSWORD_FORGOT_ERROR,
} from "../actions/password-forgot";

export const initialState = {
  email: "",
  success: false,
  passwordForgotRequest: false,
  passwordForgotError: false,
};

export const passwordForgotReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_FORGOT_REQUEST: {
      return {
        ...state,
        passwordForgotRequest: true,
      };
    }
    case PASSWORD_FORGOT_SUCCESS: {
      return {
        ...state,
        passwordForgotRequest: true,
        passwordForgotError: false,
        email: action.payload.email,
        success: action.payload.success,
      };
    }
    case PASSWORD_FORGOT_ERROR: {
      return {
        ...state,
        passwordForgotRequest: false,
        passwordForgotError: true,
      };
    }
    default: {
      return state;
    }
  }
};
