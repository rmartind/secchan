import { put, takeLatest, call } from 'redux-saga/effects';
import { channelsRequest, getChannelByName } from '../service';
import {
  CHANNELS,
  CHANNELS_SUCCESS,
  CHANNELS_FAILURE,
  CHANNEL,
  CHANNEL_SUCCESS,
  CHANNEL_FAILURE,
} from '../actions/actionTypes';


function* channelsSaga() {
  try {
    const response = yield call(channelsRequest);
    yield put({ type: CHANNELS_SUCCESS, response });
  } catch (error) {
    yield put({ type: CHANNELS_FAILURE, error });
  }
}

export function* channelsWatch() {
  yield takeLatest(CHANNELS, channelsSaga);
}

function* channelByNameSaga(name) {
  try {
    const response = yield call(getChannelByName, name);
    yield put({ type: CHANNEL_SUCCESS, response });
  } catch (error) {
    yield put({ type: CHANNEL_FAILURE, error });
  }
}

export function* channelByNameWatch() {
  yield takeLatest(CHANNEL, channelByNameSaga);
}
