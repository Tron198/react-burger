import { apiBurger } from '../../utils/api';

export const PASSWORD_FORGOT_REQUEST = 'PASSWORD_FORGOT_REQUEST';
export const PASSWORD_FORGOT_SUCCESS = 'PASSWORD_FORGOT_SUCCESS';
export const PASSWORD_FORGOT_ERROR = 'PASSWORD_FORGOT_ERROR';

export const passwordForgotSuccess = (payload) => ({
  type: PASSWORD_FORGOT_SUCCESS,
  payload
})

export function createNewPassword(email) {
  return (dispatch) =>
    apiBurger.passwordForgotRequest(email)
      .then((payload) => {
        dispatch(passwordForgotSuccess(payload));
      })
      .catch((error) => {
        console.log(error)
      })
}