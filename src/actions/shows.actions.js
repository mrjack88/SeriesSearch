import { showsService } from '../services';

export const REQUEST_SHOWS_SEARCH = 'REQUEST_SHOWS_SEARCH';
export const RECEIVED_SHOWS_SEARCH = 'RECEIVED_SHOWS_SEARCH';
export const ERROR_SHOWS_SEARCH = 'ERROR_SHOWS_SEARCH';

export const REQUEST_SHOWS_BYID = 'REQUEST_SHOWS_BYID';
export const RECEIVED_SHOWS_BYID = 'RECEIVED_SHOWS_BYID';
export const ERROR_SHOWS_BYID = 'ERROR_SHOWS_BYID';

export const REQUEST_SHOWS_CAST = 'REQUEST_SHOWS_CAST';
export const RECEIVED_SHOWS_CAST = 'RECEIVED_SHOWS_CAST';
export const ERROR_SHOWS_CAST = 'ERROR_SHOWS_CAST';

export const showsActions = {
  getShows,
  getShowById,
  getShowCast
};

function getShows(query) {
  return dispatch => {
    dispatch({ type: REQUEST_SHOWS_SEARCH });

    showsService.getShows(query).then(
      response => {
        dispatch({ type: RECEIVED_SHOWS_SEARCH, response });
      },
      error => {
        dispatch({ type: ERROR_SHOWS_SEARCH, error });
      }
    );
  };
}

function getShowById(id) {
  return dispatch => {
    dispatch({ type: REQUEST_SHOWS_BYID });

    showsService.getShowById(id).then(
      response => {
        dispatch({ type: RECEIVED_SHOWS_BYID, response });
      },
      error => {
        dispatch({ type: ERROR_SHOWS_BYID, error });
      }
    );
  };
}

function getShowCast(id) {
  return dispatch => {
    dispatch({ type: REQUEST_SHOWS_CAST });
    showsService.getShowCast(id).then(
      response => {
        dispatch({ type: RECEIVED_SHOWS_CAST, response });
      },
      error => {
        dispatch({ type: ERROR_SHOWS_CAST, error });
      }
    );
  };
}
