/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { threadsByChannel } from '../actions';

class Channel extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const channelName = this.props.location.pathname.replace('/', '');
    this.props.threadsByChannel(channelName);
  }

  render() {
    return (
      <section className="content">
        <>
          {this.props.threads.map(thread => (
            <li key={thread._id}>
              <Link to={{
                pathname: `${this.props.location.pathname}/${thread.title}`,
                thread,
              }}
              >
                {thread.title}
              </Link>
            </li>
          ))}
        </>
      </section>
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
