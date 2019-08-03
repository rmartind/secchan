import React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/styles';
import {
  Grid,
  List,
  ListItem,
  Container,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { reqChannels } from '../actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  channelsList: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 2),
    textAlign: 'center',
  },
  itemText: {
    textAlign: 'center',
    color: 'white',
  },
});


class Channels extends React.Component {
  componentDidMount() {
    const { reqChannels } = this.props;
    reqChannels();
  }

  render() {
    const { channels } = this.props;
    const { classes } = this.props;
    return (
      <Container maxWidth="sm">
        <Grid container spacing={5}>
          <Grid item className={classes.item} xs={6}>
            <Typography variant="h4" className={classes.title}>
              General
            </Typography>
            <div className={classes.channelsList}>
              <List>
                {channels.map(channel => (
                  channel.type === 'general' ? (
                    <ListItem component={Link} to={`/${channel.name}`}>
                      <ListItemText className={classes.itemText}>
                        {channel.name}
                      </ListItemText>
                    </ListItem>
                  ) : null
                ))}
              </List>
            </div>
          </Grid>
          <Grid item className={classes.item} xs={6}>
            <Typography variant="h4" className={classes.title}>
              Security
            </Typography>
            <div className={classes.channelsList}>
              <List>
                {channels.map(channel => (
                  channel.type === 'security' ? (
                    <ListItem color="inherit" component={Link} to={`/${channel.name}`}>
                      <ListItemText className={classes.itemText}>
                        {channel.name}
                      </ListItemText>
                    </ListItem>
                  ) : null
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Channels));
