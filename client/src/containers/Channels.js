import { connect } from 'react-redux';
import Channels from '../components/Channels';


const mapState = state => ({
  channels: state.channels,
});

export default connect(mapState, null)(Channels);
