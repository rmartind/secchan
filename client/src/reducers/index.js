import { combineReducers } from 'redux';
import {
  ADD_CHANNEL,
  REC_CHANNELS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REAUTH_SUCCESS,
  REAUTH_FAILURE,
  LOGIN,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/actionTypes';


const channels = (state = [], action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return { ...state, channels: { ...channels, channel: action.channel } };
    case REC_CHANNELS:
      return [...state, ...action.channels];
    default:
      return state;
  }
};

const login = (state = [], action) => {
  const { response } = action;
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...response, isLoggedin: true };
    case LOGIN_FAILURE:
      return { ...state, ...response, isLoggedin: false };
    case LOGIN:
      return { ...state };
    case SIGNUP:
      return { ...state };
    case SIGNUP_SUCCESS:
      return { ...state, ...response, isLoggedin: true };
    case SIGNUP_FAILURE:
      return { ...state, ...response, isLoggedin: false };
    default:
      return state;
  }
};

const reauth = (state = [], action) => {
  const { response } = action;

  switch (action.type) {
    case REAUTH_SUCCESS:
      return { ...state, response };
    case REAUTH_FAILURE:
      return { ...state, response };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  channels, login, reauth,
});

export default rootReducer;
