import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  TextField,
  MenuItem,
  Button,
  Container,
  Grid,
  Link
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

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

const Login = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <div className={classes.root}>
        <form className={classes.form} noValidate>
          <TextField
            required
            id="username"
            label="Username"
            fullWidth
            className="textfield"
            margin="normal"
            variant="outlined"
            color="inherit"
          />
          <Button
            className={classes.button}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
