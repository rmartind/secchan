import { connect } from 'react-redux';
import { addMessage } from '../actions';
import MessageForm from '../components/MessageForm';

const mapState = state => ({
  currentThread: state.currentThread,
});

const mapDispatch = dispatch => ({
  addMessage: data => dispatch(addMessage(data)),
});

export default connect(mapState, mapDispatch)(MessageForm);
