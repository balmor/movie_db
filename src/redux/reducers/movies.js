export function movies(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.movies;
    default:
      return state;
  }
}

export function movie(state = {}, action) {
  switch (action.type) {
    case 'FETCH_SINGLE_DATA_SUCCESS':
      return action.movie;
    default:
      return state;
  }
}
