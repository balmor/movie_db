import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { getMovies, searchSaga } from '../actions/movies';

function* fetchMovies(payload) {
  try {
    const respose = yield call(getMovies, payload);
    if (payload.id) {
      yield put({ type: 'FETCH_SINGLE_DATA_SUCCESS', item: respose.data, });
    } else {
      yield put({ type: 'FETCH_DATA_SUCCESS', items: respose.data.results, });
    }
  } catch(error) {
    yield put({ type: 'FETCH_DATA_FAILED', isFailed: String(error) })
  }
}

function* watcherMovies() {
  yield takeLatest('FETCH_DATA_LOADING', fetchMovies);
}

function* fetchSearch(payload) {
  try {
    const response = yield call(searchSaga, payload);
    yield put({ type: 'FETCH_SEARCH_SUCCESS', items: response.data.results, });
    yield put({ type: 'FETCH_PAGINATION', currentPage: response.data.page, totalPages: response.data.total_pages, totalResults: response.data.total_results });
  } catch(error) {
    yield put({ type: 'FETCH_SEARCH_FAILED', isFailed: String(error) })
  }
}

function* watcherSearch() {
  yield takeLatest('FETCH_SEARCH_LOADING', fetchSearch);
}

export default function* rootSaga() {
  yield all([
    fork(watcherMovies),
    fork(watcherSearch),
  ]);
}
