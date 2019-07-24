import { put, takeLatest, call } from 'redux-saga/effects';
import { loginRequest } from '../service';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/actionTypes';


function* loginSaga(data) {
  try {
    const response = yield call(loginRequest, data);
    sessionStorage.setItem('token', response.token);
    yield put({ type: LOGIN_SUCCESS, response });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
  }
}

export function* loginWatch() {
  yield takeLatest(LOGIN, loginSaga);
}
