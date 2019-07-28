import { THREADS } from './actionTypes';

export const threadsByChannel = channelID => ({
  type: THREADS,
  channelID,
});
