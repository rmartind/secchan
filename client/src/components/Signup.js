import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../actions';



// eslint-disable-next-line react/prefer-stateless-function
class Signup extends React.Component {
  handleOnSubmit = event => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.email.value,
    }
    this.props.signUp(data);
  }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" required />
          <br></br>
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" id="password" required />
          <br></br>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" required />
           <br></br>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = dispatch => bindActionCreators(
  {
    signUp,
  },
  dispatch,
);

export default connect(null, mapDispatch)(Signup);