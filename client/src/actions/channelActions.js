import {
  ADD_CHANNEL,
  EDIT_CHANNEL,
  DEL_CHANNEL,
  REC_CHANNELS,
  REQ_CHANNELS,
} from './actionTypes';

export const addChannel = channel => ({
  type: ADD_CHANNEL,
  channel,
});

export const editChannel = channel => ({
  type: EDIT_CHANNEL,
  channel,
});

export const delChannel = channel => ({
  type: DEL_CHANNEL,
  channel,
});

export const receiveChannels = channels => ({
  type: REC_CHANNELS,
  channels,
});


export const requestChannels = () => ({
  type: REQ_CHANNELS,
});
