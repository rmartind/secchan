import React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { reqChannels } from '../actions';

class Channels extends React.Component {
  componentDidMount() {
    this.props.reqChannels();
  }

  render() {
    return (
      <section className="content">
        <>
          {this.props.channels.map(channel => (
            <li key={channel._id}>
              <Link to={{
                pathname: `/${channel.name}`,
                channel,
              }}
              >
                {channel.name}
              </Link>
            </li>
          ))}
        </>
      </section>
    )
  }
}

const mapDispatch = dispatch => bindActionCreators(
  {
    reqChannels,
  },
  dispatch,
);

const mapState = state => ({
  channels: state.channels,
});

export default connect(mapState, mapDispatch)(Channels);
