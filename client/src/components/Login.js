import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './App.css';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions';



// eslint-disable-next-line react/prefer-stateless-function
class Login extends React.Component {
  handleOnSubmit = event => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const data = {
      username,
      password,
    }
    this.props.login(data)
  }

  render() {
    return (
      <div className="wrapper">
        <Header Nav={Nav} />
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" required />
          <label>Password:</label>
          <input type="text" name="password" id="password" required />
          
          <button>Submit</button>
        </form>
        <Footer />
      </div>
    );
  }
}

const mapDispatch = dispatch => bindActionCreators(
  {
    login,
  },
  dispatch,
);

export default connect(null, mapDispatch)(Login);



//export default Login;
