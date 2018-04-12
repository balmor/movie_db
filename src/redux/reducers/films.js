export function films(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.films;
    default:
      return state;
  }
}

export function film(state = {}, action) {
  switch (action.type) {
    case 'FETCH_SINGLE_DATA_SUCCESS':
      return action.film;
    default:
      return state;
  }
}

