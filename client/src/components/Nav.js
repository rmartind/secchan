import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Nav = () => (
  <AppBar position="sticky">
    <ToolBar>
      <Typography type="Devnulled" color="inherit" style={{ flex: 1 }} component={NavLink} to="/">
        Devnulled
      </Typography>
      <Button color="inherit" component={NavLink} to="/login">Login</Button>
    </ToolBar>
  </AppBar>
);

export default Nav;
