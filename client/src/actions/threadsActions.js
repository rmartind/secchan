import { THREADS, THREAD } from './actionTypes';

export const threadsByChannel = channelID => ({
  type: THREADS,
  channelID,
});

export const threadByID = id => ({
  type: THREAD,
  id,
});
