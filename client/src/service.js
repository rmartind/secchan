import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:8001/api/v1/';

export async function loginRequest(req) {
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
}

export async function signUpRequest(req) {
  console.log(req.user);
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
}

export async function reauthRequest() {
  const token = sessionStorage.getItem('token');
  const args = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  const response = await fetch(`${baseUrl}users/auth/login`, args);
  return response.json();
}

export async function channelsRequest() {
  const response = await fetch(`${baseUrl}channels/`);
  return response.json();
}
