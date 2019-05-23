import { combineReducers } from 'redux';
import {
  ADD_CHANNEL, REC_CHANNELS,
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

const rootReducer = combineReducers({
  channels,
});

export default rootReducer;
