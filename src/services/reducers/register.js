import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from "../actions/register";

export const initialState = {
  user: {},
  success: false,
  registrationRequest: false,
  registrationError: false,
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        registrationRequest: true,
        registrationError: false,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        registrationRequest: true,
        registrationError: false,
        user: action.payload.user,
        success: action.payload.success,
      };
    }
    case REGISTRATION_ERROR: {
      return {
        ...state,
        registrationRequest: false,
        registrationError: true,
      };
    }
    default: {
      return state;
    }
  }
};
