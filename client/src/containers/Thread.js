/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { messagesByThread, threadByID } from '../actions';
import Messages from '../components/Messages';
import MessageForm from './MessageForm';

class Thread extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    const threadID = pathname.substring(pathname.lastIndexOf('/') + 1);
    const { messagesByThread, threadByID } = this.props;
    messagesByThread(threadID);
    threadByID(threadID);
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.currentThread.title}
        <br/>
        {this.props.currentThread.content}
        <MessageForm />
        <Messages messages={this.props.messages}/>
      </div>
    );
  }
}

const mapState = state => ({
  messages: state.messages,
  currentThread: state.currentThread,
});

const mapDispatch = dispatch => bindActionCreators(
  {
    messagesByThread,
    threadByID,
  },
  dispatch,
);

export default connect(mapState, mapDispatch)(Thread);
