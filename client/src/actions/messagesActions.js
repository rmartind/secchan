import { MESSAGES, ADD_MESSAGE } from './actionTypes';

export const messagesByThread = threadID => ({
  type: MESSAGES,
  threadID,
});

export const addMessage = message => ({
  type: ADD_MESSAGE,
  message,
});
