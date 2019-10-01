import { ERROR_SHOWS_BYID, ERROR_SHOWS_CAST, ERROR_SHOWS_SEARCH, RECEIVED_SHOWS_BYID, RECEIVED_SHOWS_CAST, RECEIVED_SHOWS_SEARCH, REQUEST_SHOWS_BYID, REQUEST_SHOWS_CAST, REQUEST_SHOWS_SEARCH } from "../actions"

const initialState = {
  searchdata: [],
  error: {},
  isFetchingData: false,
  show:{},
  cast:[]
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
    case REQUEST_SHOWS_CAST:
      return { ...state,  cast: [], isFetchingData: true }
    case RECEIVED_SHOWS_CAST:
      return { ...state, cast: action.response, isFetchingData: false }
    case ERROR_SHOWS_CAST:
      return { ...state, error: action.error, isFetchingData: false }
    default:
      return state
  }
}
