export function moviesHasErrored(state = false, action) {
  switch (action.type) {
    case 'MOVIES_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}
export function moviesIsLoading(state = false, action) {
  switch (action.type) {
    case 'MOVIES_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
export function movies(state = [], action) {
  switch (action.type) {
    case 'MOVIES_FETCH_DATA_SUCCESS':
      return action.movies;
    default:
      return state;
  }
}
