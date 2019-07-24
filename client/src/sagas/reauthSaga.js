import { put, takeLatest, call } from 'redux-saga/effects';
import { reauthRequest } from '../service';
import {
  REAUTH,
  REAUTH_SUCCESS,
  REAUTH_FAILURE,
} from '../actions/actionTypes';


function* reauthSaga(token) {
  try {
    const response = yield call(reauthRequest, token);
    yield put({ type: REAUTH_SUCCESS, response });
  } catch (error) {
    yield put({ type: REAUTH_FAILURE, error });
  }
}

export function* reauthWatch() {
  yield takeLatest(REAUTH, reauthSaga);
}
