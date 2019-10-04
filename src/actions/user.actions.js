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

export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD';
export const RECEIVED_RESET_PASSWORD = 'RECEIVED_RESET_PASSWORD';
export const ERROR_RESET_PASSWORD = 'ERROR_RESET_PASSWORD';

export const REQUEST_CONFIRM_RESET_PASSWORD = 'REQUEST_CONFIRM_RESET_PASSWORD';
export const RECEIVED_CONFIRM_RESET_PASSWORD = 'RECEIVED_CONFIRM_RESET_PASSWORD';
export const ERROR_CONFIRM_RESET_PASSWORD = 'ERROR_CONFIRM_RESET_PASSWORD';

export const userActions = {
  signup,
  signout,
  signin,
  resetPassword,
  confirmResetPassword
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

function resetPassword(email) {
  return dispatch => {
    dispatch({ type: REQUEST_RESET_PASSWORD });

    userService.resetPassword(email, password).then(
      response => {
        dispatch({ type: RECEIVED_RESET_PASSWORD, response });
      },
      error => {
        dispatch({ type: ERROR_RESET_PASSWORD, error });
      }
    );
  };
}

function confirmResetPassword(code, newPassword) {
  return dispatch => {
    dispatch({ type: REQUEST_CONFIRM_RESET_PASSWORD });

    userService.confirmResetPassword(code, newPassword).then(
      response => {
        dispatch({ type: RECEIVED_CONFIRM_RESET_PASSWORD, response });
      },
      error => {
        dispatch({ type: ERROR_CONFIRM_RESET_PASSWORD, error });
      }
    );
  };
}
