export function moviesHasErrored(hasErrored) {
  return {
    type: 'MOVIES_HAS_ERRORED',
    hasErrored
  };
}
export function moviesIsLoading(isLoading) {
  return {
    type: 'MOVIES_IS_LOADING',
    isLoading
  };
}
export function moviesFetchDataSuccess(movies) {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    movies
  };
}

export function moviesFetchData(url) {
  return (dispatch) => {
    dispatch(moviesIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(moviesIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((movies) => dispatch(moviesFetchDataSuccess(movies)))
      .catch(() => dispatch(moviesHasErrored(true)));
  };
}
