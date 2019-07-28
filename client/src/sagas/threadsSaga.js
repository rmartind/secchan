import { put, takeLatest, call } from 'redux-saga/effects';
import { threadsByChannelName } from '../service';
import {
  THREADS,
  THREADS_SUCCESS,
  THREADS_FAILURE,
} from '../actions/actionTypes';


function* threadsSaga(id) {
  try {
    const response = yield call(threadsByChannelName, id);
    yield put({ type: THREADS_SUCCESS, response });
  } catch (error) {
    yield put({ type: THREADS_FAILURE, error });
  }
}

export function* threadsWatch() {
  yield takeLatest(THREADS, threadsSaga);
}
