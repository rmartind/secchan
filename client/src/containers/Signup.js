import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../actions';
import Signup from '../components/Signup';

const mapDispatch = dispatch => bindActionCreators(
  {
    signUp,
  },
  dispatch,
);

export default connect(null, mapDispatch)(Signup);
