import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:8001/api/v1/';

export const loginRequest = async (req) => {
  JSON.stringify(req.user);
  const args = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.user),
  };
  const response = await fetch(`${baseUrl}users/auth/login`, args);
  return response.json();
};

export const signUpRequest = async (req) => {
  JSON.stringify(req.user);
  const args = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.user),
  };

  const response = await fetch(`${baseUrl}users/auth/register`, args);
  return response.json();
};

export const reauthRequest = async () => {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  const response = await fetch(`${baseUrl}users/auth/reauth`, args);
  return response.json();
};

// Channels
export const channelsRequest = async () => {
  const response = await fetch(`${baseUrl}channels/`);
  return response.json();
};


export const getChannelByID = async (req) => {
  const response = await fetch(`${baseUrl}channels/${req.id}`);
  return response.json();
};

export const createChannel = async (req) => {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(req.channel),
  };
  const response = await fetch(`${baseUrl}channels/`, args);
  return response.json();
};

export const updateChannelByID = async (req) => {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(req.channel),
  };
  const response = await fetch(`${baseUrl}channels/${req.id}`, args);
  return response.json();
};

export const deleteChannelByID = async (req) => {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
  const response = await fetch(`${baseUrl}channels/${req.id}`, args);
  return response.json();
};


// Threads
export const threadsRequest = async () => {
  const response = await fetch(`${baseUrl}threads/`);
  return response.json();
};

export const threadsByChannelID = async (req) => {
  console.log(req.channelID);
  const response = await fetch(`${baseUrl}channels/${req.channelID}/threads`);
  return response.json();
};

export const threadsByChannelName = async (req) => {
  const response = await fetch(`${baseUrl}channels/name/${req.channelID}/threads`);
  return response.json();
};

export const getThreadByID = async (req) => {
  const response = await fetch(`${baseUrl}threads/${req.id}`);
  return response.json();
};

export const createThread = async (req) => {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(req.thread),
  };
  const response = await fetch(`${baseUrl}threads/`, args);
  return response.json();
};

export const updateThreadByID = async (req) => {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(req.thread),
  };
  const response = await fetch(`${baseUrl}threads/${req.id}`, args);
  return response.json();
};

export const deleteThreadByID = async (req) => {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
  const response = await fetch(`${baseUrl}threads/${req.id}`, args);
  return response.json();
};

// Messages
export const messagesRequest = async () => {
  const response = await fetch(`${baseUrl}messages/`);
  return response.json();
};

export const messagesByThread = async (req) => {
  const response = await fetch(`${baseUrl}threads/${req.threadID}/messages`);
  return response.json();
};

export const getMessageByID = async (req) => {
  const response = await fetch(`${baseUrl}messages/${req.id}`);
  return response.json();
};

export const createMessage = async (req) => {
  console.log(req.message);
  const token = await sessionStorage.getItem('token');
  console.log(token);
  const args = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(req.message),
  };
  const response = await fetch(`${baseUrl}messages/`, args);
  return response.json();
};

export const updateMessageByID = async (req) => {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(req.message),
  };
  const response = await fetch(`${baseUrl}messages/${req.id}`, args);
  return response.json();
};

export const deleteMessageByID = async (req) => {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
  const response = await fetch(`${baseUrl}messages/${req.id}`, args);
  return response.json();
};
