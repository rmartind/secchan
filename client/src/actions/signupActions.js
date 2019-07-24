import {
  SIGNUP,
} from './actionTypes';

export const signUp = user => ({
  type: SIGNUP,
  user,
});
