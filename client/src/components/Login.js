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

const Login = ({ login }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const data = {
      username,
      password,
    };
    login(data);
  };
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <div className={classes.root}>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
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
          <TextField
            required
            id="password"
            label="Password"
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
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link color="inherit" component={NavLink} to="/reset">
                Need a password reset?
              </Link>
            </Grid>
            <Grid item>
              <Link color="inherit" component={NavLink} to="/signup">
                New? Sign up here.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
