import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import App from './App';
import Signup from './Signup';
import Login from './Login';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default Root;
