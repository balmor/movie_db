export function films(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.films;
    default:
      return state;
  }
}
