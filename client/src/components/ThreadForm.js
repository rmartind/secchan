import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  MenuItem,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(6),
  },
  form: {
    width: '100%',
  },
  button: {
    width: '100%',
    margin: theme.spacing(1, 0, 1),
  },
}));

const ThreadForm = ({ addThread, currentChannel }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const thread = {
      channelID: currentChannel._id,
      channelName: currentChannel.name,
      title: event.target.title.value,
      content: event.target.content.value,
    };
    addThread(thread);
  };
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <div className={classes.root}>
        <Typography variant="h4">
          Add Thread
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <TextField
            required
            id="Title"
            label="Title"
            fullWidth
            className="textfield"
            margin="normal"
            variant="filled"
            color="inherit"
          />
          <TextField
            required
            id="Content"
            label="Content"
            fullWidth
            classname="textfield"
            margin="normal"
            variant="filled"
            color="inherit"
            multiline
            rows="4"
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

/*
const ThreadForm = ({ addThread, currentChannel }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const thread = {
      channelID: currentChannel._id,
      channelName: currentChannel.name,
      title: event.target.title.value,
      content: event.target.content.value,
    };
    addThread(thread);
  };
  return (
    <div className="thread-form">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">title</label>
        <input id="title" name="title" />
        <br />
        <label htmlFor="content">message</label>
        <textarea id="content" name="content" placeholder="Write a message..." />
        <button>Post Thread</button>
      </form>
    </div>
  );
};
*/

export default ThreadForm;
