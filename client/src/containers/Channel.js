import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { threadsByChannel } from '../actions';
import Threads from '../components/Threads';
import ThreadForm from '../components/ThreadForm';

class Channel extends React.Component {
  componentDidMount() {
    const channelName = this.props.location.pathname.replace('/', '');
    this.props.threadsByChannel(channelName);
  }

  render() {
    return (
      <div className="wrapper">
        <ThreadForm />
        <Threads location={this.props.location} threads={this.props.threads} />
      </div>
    );
  }
}

const mapState = state => ({
  threads: state.threads,
});

const mapDispatch = dispatch => bindActionCreators(
  {
    threadsByChannel,
  },
  dispatch,
);

export default connect(mapState, mapDispatch)(Channel);
