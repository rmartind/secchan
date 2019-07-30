import { put, takeLatest, call } from 'redux-saga/effects';
import {
  messagesByThread,
  createMessage,
  updateMessageByID,
  deleteMessageByID,
} from '../service';
import {
  MESSAGES,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,
  ADD_MESSAGE,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
  EDIT_MESSAGE,
  EDIT_MESSAGE_SUCCESS,
  EDIT_MESSAGE_FAILURE,
  DEL_MESSAGE,
  DEL_MESSAGE_SUCCESS,
  DEL_MESSAGE_FAILURE,
} from '../actions/actionTypes';


function* messagesSaga(id) {
  try {
    const response = yield call(messagesByThread, id);
    yield put({ type: MESSAGES_SUCCESS, response });
  } catch (error) {
    yield put({ type: MESSAGES_FAILURE, error });
  }
}

export function* messagesWatch() {
  yield takeLatest(MESSAGES, messagesSaga);
}

function* addMessageSaga(req) {
  try {
    const response = yield call(createMessage, req);
    yield put({ type: ADD_MESSAGE_SUCCESS, response });
  } catch (error) {
    yield put({ type: ADD_MESSAGE_FAILURE, error });
  }
}

export function* addMessageWatch() {
  yield takeLatest(ADD_MESSAGE, addMessageSaga);
}

function* editMessageSaga(req) {
  try {
    const response = yield call(updateMessageByID, req);
    yield put({ type: EDIT_MESSAGE_SUCCESS, response });
  } catch (error) {
    yield put({ type: EDIT_MESSAGE_FAILURE, error });
  }
}

export function* editMessageWatch() {
  yield takeLatest(EDIT_MESSAGE, editMessageSaga);
}

function* delMessageSaga(req) {
  try {
    const response = yield call(deleteMessageByID, req);
    yield put({ type: DEL_MESSAGE_SUCCESS, response });
  } catch (error) {
    yield put({ type: DEL_MESSAGE_FAILURE, error });
  }
}

export function* delMessageWatch() {
  yield takeLatest(DEL_MESSAGE, delMessageSaga);
}
