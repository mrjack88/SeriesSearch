import { ERROR_SHOWS_SEARCH, RECEIVED_SHOWS_SEARCH, REQUEST_SHOWS_SEARCH } from "../actions"

const initialState = {
  searchdata: [],
  error: {}
}

export default function projects(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SHOWS_SEARCH:
      return { ...state }
    case RECEIVED_SHOWS_SEARCH:
      return { ...state, searchdata: action.response }
    case ERROR_SHOWS_SEARCH:
      return { ...state, error: action.error }
    default:
      return initialState
  }
}
