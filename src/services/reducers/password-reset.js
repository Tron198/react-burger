import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_ERROR,
} from "../actions/password-reset";

export const initialState = {
  password: "",
  token: "",
  success: false,
  passwordResetRequest: false,
  passwordResetError: false,
};

export const passwordResetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET_REQUEST: {
      return {
        ...state,
        passwordResetRequest: true,
      };
    }
    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        passwordResetRequest: true,
        passwordResetError: false,
        password: action.payload.password,
        token: action.payload.token,
        success: action.payload.success,
      };
    }
    case PASSWORD_RESET_ERROR: {
      return {
        ...state,
        passwordResetRequest: false,
        passwordResetError: true,
      };
    }
    default: {
      return state;
    }
  }
};
