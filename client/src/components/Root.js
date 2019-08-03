import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import green from '@material-ui/core/colors/green';
import App from './App';
import Signup from '../containers/Signup';
import Reset from '../containers/Reset';
import Login from '../containers/Login';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Channel from '../containers/Channel';
import Thread from '../containers/Thread';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
  },
});

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header Nav={Nav} />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/:channelName" component={Channel} />
          <Route exact path="/:channelName/:threadID" component={Thread} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default Root;
