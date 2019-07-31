import {
  CHANNELS,
  CHANNEL,
} from './actionTypes';

export const reqChannels = () => ({
  type: CHANNELS,
});

export const channelByName = name => ({
  type: CHANNEL,
  name,
});
