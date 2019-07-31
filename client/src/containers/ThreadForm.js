import { connect } from 'react-redux';
import { addThread } from '../actions';
import ThreadForm from '../components/ThreadForm';

const mapState = state => ({
  currentChannel: state.currentChannel,
});

const mapDispatch = dispatch => ({
  addThread: data => dispatch(addThread(data)),
});

export default connect(mapState, mapDispatch)(ThreadForm);
