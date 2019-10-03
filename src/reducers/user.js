import { ERROR_CONFIRM_RESET_PASSWORD, ERROR_RESET_PASSWORD, ERROR_USER_SIGNIN, ERROR_USER_SIGNOUT, ERROR_USER_SIGNUP, RECEIVED_CONFIRM_RESET_PASSWORD, RECEIVED_RESET_PASSWORD, RECEIVED_USER_SIGNIN, RECEIVED_USER_SIGNOUT, RECEIVED_USER_SIGNUP, REQUEST_CONFIRM_RESET_PASSWORD, REQUEST_RESET_PASSWORD, REQUEST_USER_SIGNIN, REQUEST_USER_SIGNOUT, REQUEST_USER_SIGNUP } from "../actions"

const initialState = {
  userData: {},
  error: {},
  isFetchingData: false,
  resetPasswordData: {},
  confirmResetPasswordData: false
}

export default function projects(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_SIGNUP:
      return { ...state, isFetchingData: true }
    case RECEIVED_USER_SIGNUP:
      return { ...state, userData: action.response, isFetchingData: false }
    case ERROR_USER_SIGNUP:
      return { ...state, error: action.error, isFetchingData: false }
    case REQUEST_USER_SIGNOUT:
      return { ...state, isFetchingData: true }
    case RECEIVED_USER_SIGNOUT:
      return { ...state, userData: action.response, isFetchingData: false }
    case ERROR_USER_SIGNOUT:
      return { ...state, error: action.error, isFetchingData: false }
    case REQUEST_USER_SIGNIN:
      return { ...state, isFetchingData: true }
    case RECEIVED_USER_SIGNIN:
      return { ...state, userData: action.response, isFetchingData: false }
    case ERROR_USER_SIGNIN:
      return { ...state, error: action.error, isFetchingData: false }
    case REQUEST_RESET_PASSWORD:
      return { ...state, isFetchingData: true }
    case RECEIVED_RESET_PASSWORD:
      return {
        ...state,
        resetPasswordData: action.response,
        isFetchingData: false
      }
    case ERROR_RESET_PASSWORD:
      return { ...state, isFetchingData: false }
    case REQUEST_CONFIRM_RESET_PASSWORD:
      return { ...state, isFetchingData: true }
    case RECEIVED_CONFIRM_RESET_PASSWORD:
      return {
        ...state,
        confirmResetPasswordData: action.response,
        isFetchingData: false
      }
    case ERROR_CONFIRM_RESET_PASSWORD:
      return { ...state, isFetchingData: false }
    default:
      return state
  }
}
