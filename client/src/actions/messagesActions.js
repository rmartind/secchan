import { MESSAGES } from './actionTypes';

export const messagesByThread = threadID => ({
  type: MESSAGES,
  threadID,
});
