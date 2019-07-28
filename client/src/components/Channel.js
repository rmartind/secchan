import React from 'react';
import './App.css';
import Threads from '../containers/Threads';

const Channel = ({ location }) => (
  <div className="wrapper">
    <Threads location={location} />
  </div>
);

export default Channel;
