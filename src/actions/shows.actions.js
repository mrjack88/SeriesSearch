import { showsService } from '../services';

export const REQUEST_SHOWS_SEARCH = 'REQUEST_SHOWS_SEARCH';
export const RECEIVED_SHOWS_SEARCH = 'RECEIVED_SHOWS_SEARCH';
export const ERROR_SHOWS_SEARCH = 'ERROR_SHOWS_SEARCH';

export const showsActions = {
  getShows,
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
