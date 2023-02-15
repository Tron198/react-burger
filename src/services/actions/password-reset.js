import { apiBurger } from '../../utils/api';

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';

export const passwordResetSuccess = (payload) => ({
  type: PASSWORD_RESET_SUCCESS,
  payload
})

export function confirmNewPassword(password, token) {
  return (dispatch) =>
    apiBurger.passwordResetRequest(password, token)
      .then((payload) => {
        dispatch(passwordResetSuccess(payload));
      })
      .catch((error) => {
        console.log(error)
      })
}