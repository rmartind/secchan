import { put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { receiveChannels } from '../actions';


//todo add errors
// eslint-disable-next-line import/prefer-default-export
export function* channelsSaga() {
  const response = yield fetch('http://localhost:8001/api/v1/channels');
  const data = yield response.json();
  yield put(receiveChannels(data));
}
