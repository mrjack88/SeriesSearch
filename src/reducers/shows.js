import { ERROR_SHOWS_BYID, ERROR_SHOWS_SEARCH, RECEIVED_SHOWS_BYID, RECEIVED_SHOWS_SEARCH, REQUEST_SHOWS_BYID, REQUEST_SHOWS_SEARCH } from "../actions"

const initialState = {
  searchdata: [],
  error: {},
  isFetchingData: false,
  show:{}
}

export default function projects(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SHOWS_SEARCH:
      return { ...state, isFetchingData: true }
    case RECEIVED_SHOWS_SEARCH:
      return { ...state, searchdata: action.response, isFetchingData: false }
    case ERROR_SHOWS_SEARCH:
      return { ...state, error: action.error, isFetchingData: false }
    case REQUEST_SHOWS_BYID:
      return { ...state,  show: {}, isFetchingData: true }
    case RECEIVED_SHOWS_BYID:
      return { ...state, show: action.response, isFetchingData: false }
    case ERROR_SHOWS_BYID:
      return { ...state, error: action.error, isFetchingData: false }
    default:
      return state
  }
}
