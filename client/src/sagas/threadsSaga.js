import { put, takeLatest, call } from 'redux-saga/effects';
import { threadsByChannelName, getThreadByID } from '../service';
import {
  THREADS,
  THREADS_SUCCESS,
  THREADS_FAILURE,
  THREAD,
  THREAD_SUCCESS,
  THREAD_FAILURE,
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

function* threadByIDSaga(id) {
  try {
    const response = yield call(getThreadByID, id);
    yield put({ type: THREAD_SUCCESS, response });
  } catch (error) {
    yield put({ type: THREAD_FAILURE, error });
  }
}

export function* threadByIDWatch() {
  yield takeLatest(THREAD, threadByIDSaga);
}