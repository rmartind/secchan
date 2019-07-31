import {
  THREADS,
  THREAD,
  ADD_THREAD,
} from './actionTypes';

export const threadsByChannel = channelID => ({
  type: THREADS,
  channelID,
});

export const threadByID = id => ({
  type: THREAD,
  id,
});

export const addThread = thread => ({
  type: ADD_THREAD,
  thread,
});
