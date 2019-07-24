import { put, takeLatest, call } from 'redux-saga/effects';
import { signUpRequest } from '../service';
import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/actionTypes';


function* signUpSaga(data) {
  try {
    const response = yield call(signUpRequest, data);
    sessionStorage.setItem('token', response.token);
    yield put({ type: SIGNUP_SUCCESS, response });
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE, error });
  }
}

export function* signUpWatch() {
  yield takeLatest(SIGNUP, signUpSaga);
}
