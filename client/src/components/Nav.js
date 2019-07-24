import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/">Sechan</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Sign up</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
