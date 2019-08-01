import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions';
import Login from '../components/Login';

const mapDispatch = dispatch => bindActionCreators(
  {
    login,
  },
  dispatch,
);

export default connect(null, mapDispatch)(Login);
