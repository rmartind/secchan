import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import App from './App';
import Signup from './Signup';
import Login from './Login';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Channel from '../containers/Channel';
import Thread from '../containers/Thread';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Header Nav={Nav} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={App} />
        <Route exact path="/:channelName" component={Channel} />
        <Route exact path="/:channelName/:threadID" component={Thread} />
      </Switch>
      <Footer />
    </Router>
  </Provider>
);

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default Root;
