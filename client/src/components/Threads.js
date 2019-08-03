/* eslint-disable no-shadow */
import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
  },
  threadsList: {
    backgroundColor: theme.palette.background.paper,
    width: '50%',
  },
  button: {
    width: '100%',
    margin: theme.spacing(1, 0, 1),
  },
  itemText: {
    textAlign: 'left',
    color: 'white',
  },
}));

const Threads = ({ location, threads }) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Table>
            {threads.map(thread => (
              <TableBody>
                <TableCell>
                  <Link color="inherit" component={NavLink} to={`${location.pathname}/${thread._id}`}>
                    {thread.title}
                  </Link>
                </TableCell>
                <TableCell align="right">{thread.user.username}</TableCell>
              </TableBody>
            ))}
          </Table>
        </Grid>
      </div>
    </Container>
  );
};

/*
const Threads = ({ location, threads }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="s">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Threads
            </Typography>
            <div className={classes.threadsList}>
              <List>
                {threads.map(thread => (
                  <ListItem component={Link} to={`${location.pathname}/${thread._id}`}>
                    <ListItemText className={classes.itemText}>
                      {thread.title}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
*/
export default Threads;
