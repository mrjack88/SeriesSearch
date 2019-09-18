import { userService } from '../services';

export const REQUEST_USER_SIGNUP = 'REQUEST_USER_SIGNUP';
export const RECEIVED_USER_SIGNUP = 'RECEIVED_USER_SIGNUP';
export const ERROR_USER_SIGNUP = 'ERROR_USER_SIGNUP';

export const REQUEST_USER_SIGNOUT = 'REQUEST_USER_SIGNOUT';
export const RECEIVED_USER_SIGNOUT = 'RECEIVED_USER_SIGNOUT';
export const ERROR_USER_SIGNOUT = 'ERROR_USER_SIGNOUT';

export const REQUEST_USER_SIGNIN = 'REQUEST_USER_SIGNIN';
export const RECEIVED_USER_SIGNIN = 'RECEIVED_USER_SIGNIN';
export const ERROR_USER_SIGNIN = 'ERROR_USER_SIGNIN';

export const userActions = {
  signup,
  signout,
  signin
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

function signout() {
  return dispatch => {
    dispatch({ type: REQUEST_USER_SIGNOUT });

    userService.signout().then(
      response => {
        dispatch({ type: RECEIVED_USER_SIGNOUT, response });
      },
      error => {
        dispatch({ type: ERROR_USER_SIGNOUT, error });
      }
    );
  };
}

function signin(email, password) {
  return dispatch => {
    dispatch({ type: REQUEST_USER_SIGNIN });

    userService.signin(email, password).then(
      response => {
        dispatch({ type: RECEIVED_USER_SIGNIN, response });
      },
      error => {
        dispatch({ type: ERROR_USER_SIGNIN, error });
      }
    );
  };
}
