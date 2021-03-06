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
  MESSAGES,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
  THREAD,
  THREAD_SUCCESS,
  THREAD_FAILURE,
  ADD_THREAD_SUCCESS,
  ADD_THREAD_FAILURE,
  CHANNEL,
  CHANNEL_SUCCESS,
  CHANNEL_FAILURE,
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

const currentChannel = (state = [], action) => {
  const { response } = action;
  switch (action.type) {
    case CHANNEL:
      return state;
    case CHANNEL_SUCCESS:
      return { ...response };
    case CHANNEL_FAILURE:
      return { ...response };
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
    case ADD_THREAD_SUCCESS:
      return [...state, response];
    case ADD_THREAD_FAILURE:
      return [...state, response];
    default:
      return state;
  }
};

const currentThread = (state = [], action) => {
  const { response } = action;
  switch (action.type) {
    case THREAD:
      return state;
    case THREAD_SUCCESS:
      return { ...response };
    case THREAD_FAILURE:
      return { ...response };
    default:
      return state;
  }
};

const messages = (state = [], action) => {
  const { response } = action;
  switch (action.type) {
    case MESSAGES:
      return state;
    case MESSAGES_SUCCESS:
      return [...response];
    case MESSAGES_FAILURE:
      return [...response];
    case ADD_MESSAGE_SUCCESS:
      return [...state, response];
    case ADD_MESSAGE_FAILURE:
      return [...state, response];
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

const rootReducer = combineReducers({
  channels,
  login,
  reauth,
  threads,
  messages,
  currentThread,
  currentChannel,
});

export default rootReducer;
