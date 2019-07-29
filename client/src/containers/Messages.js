/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { messagesByThread } from '../actions';

class Messages extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    const threadID = pathname.substring(pathname.lastIndexOf('/') + 1);
    const { messagesByThread } = this.props;
    messagesByThread(threadID);
  }

  render() {
    return (
      <section className="content">
        <>
          {this.props.messages.map(message => (
            <li key={message._id}>
              {`${message.user.username} : ${message.content}`}
            </li>
          ))}
        </>
      </section>
    );
  }
}

const mapState = state => ({
  messages: state.messages,
});

const mapDispatch = dispatch => bindActionCreators(
  {
    messagesByThread,
  },
  dispatch,
);

export default connect(mapState, mapDispatch)(Messages);
