import React from 'react';
import './App.css';
import Messages from '../containers/Messages';

const Thread = ({ location }) => (
  <div className="wrapper">
    <Messages location={location} />
  </div>
);

export default Thread;
