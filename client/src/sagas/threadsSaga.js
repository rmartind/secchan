import { put, takeLatest, call } from 'redux-saga/effects';
import {
  threadsByChannelName,
  getThreadByID,
  createThread,
  updateThreadByID,
  deleteThreadByID,
} from '../service';
import {
  THREADS,
  THREADS_SUCCESS,
  THREADS_FAILURE,
  THREAD,
  THREAD_SUCCESS,
  THREAD_FAILURE,
  ADD_THREAD,
  ADD_THREAD_SUCCESS,
  ADD_THREAD_FAILURE,
  EDIT_THREAD,
  EDIT_THREAD_SUCCESS,
  EDIT_THREAD_FAILURE,
  DEL_THREAD,
  DEL_THREAD_SUCCESS,
  DEL_THREAD_FAILURE,
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

function* addThreadSaga(req) {
  try {
    const response = yield call(createThread, req);
    yield put({ type: ADD_THREAD_SUCCESS, response });
  } catch (error) {
    yield put({ type: ADD_THREAD_FAILURE, error });
  }
}

export function* addThreadWatch() {
  yield takeLatest(ADD_THREAD, addThreadSaga);
}

function* editThreadSaga(req) {
  try {
    const response = yield call(updateThreadByID, req);
    yield put({ type: EDIT_THREAD_SUCCESS, response });
  } catch (error) {
    yield put({ type: EDIT_THREAD_FAILURE, error });
  }
}

export function* editThreadWatch() {
  yield takeLatest(EDIT_THREAD, editThreadSaga);
}

function* delThreadSaga(req) {
  try {
    const response = yield call(deleteThreadByID, req);
    yield put({ type: DEL_THREAD_SUCCESS, response });
  } catch (error) {
    yield put({ type: DEL_THREAD_FAILURE, error });
  }
}

export function* delMessageWatch() {
  yield takeLatest(DEL_THREAD, delThreadSaga);
}
