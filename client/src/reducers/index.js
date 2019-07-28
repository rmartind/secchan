import { combineReducers } from 'redux';
import {
  ADD_CHANNEL,
  CHANNELS_SUCCESS,
  CHANNELS_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REAUTH_SUCCESS,
  REAUTH_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  THREADS,
  THREADS_SUCCESS,
  THREADS_FAILURE,
} from '../actions/actionTypes';


const channels = (state = [], action) => {
  const { response } = action;

  switch (action.type) {
    case ADD_CHANNEL:
      return { ...state, channels: { ...channels, channel: action.channel } };
    case CHANNELS_SUCCESS:
      return [...response];
    case CHANNELS_FAILURE:
      return [...response];
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

const threads = (state = [], action) => {
  const { response } = action;
  switch (action.type) {
    case THREADS:
      return state;
    case THREADS_SUCCESS:
      return [...response];
    case THREADS_FAILURE:
      return [...response];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  channels, login, reauth, threads,
});

export default rootReducer;
