/* eslint-disable no-shadow */
import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import {
  TextField,
  MenuItem,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';

const Threads = ({ location, threads }) => (
  <section className="content">
    <>
      {threads.map(thread => (
        <li key={thread._id}>
          <NavLink to={{
            pathname: `${location.pathname}/${thread._id}`,
            thread,
          }}
          >
            {thread.title}
          </NavLink> <br></br>
          {`by ${thread.user.username}`}
        </li>
      ))}
    </>
  </section>
);

export default Threads;
