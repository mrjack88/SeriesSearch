import { userService } from '../services';

export const REQUEST_USER_SIGNUP = 'REQUEST_USER_SIGNUP';
export const RECEIVED_USER_SIGNUP = 'RECEIVED_USER_SIGNUP';
export const ERROR_USER_SIGNUP = 'ERROR_USER_SIGNUP';

export const userActions = {
  signup,
};

function signup(email, password) {
  return dispatch => {
    dispatch({ type: REQUEST_USER_SIGNUP });

    userService.signup(email, password).then(
      response => {
        dispatch({ type: RECEIVED_USER_SIGNUP, response });
      },
      error => {
        dispatch({ type: ERROR_USER_SIGNUP, error });
      }
    );
  };
}
