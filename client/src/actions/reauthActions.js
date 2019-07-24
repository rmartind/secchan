import {
  REAUTH,
} from './actionTypes';

export const reauth = token => ({
  type: REAUTH,
  token,
});
