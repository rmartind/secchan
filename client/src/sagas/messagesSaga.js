import { put, takeLatest, call } from 'redux-saga/effects';
import { messagesByThread } from '../service';
import {
  MESSAGES,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,
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
