import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './App.css';
import Channels from '../containers/Channels';

const App = () => (
  <div className="wrapper">
    <Header Nav={Nav} />
    <Channels />
    <Footer />
  </div>
);

export default App;
