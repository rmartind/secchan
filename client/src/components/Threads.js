/* eslint-disable no-shadow */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Threads = ({ location, threads }) => (
  <section className="content">
    <>
      {threads.map(thread => (
        <li key={thread._id}>
          <Link to={{
            pathname: `${location.pathname}/${thread._id}`,
            thread,
          }}
          >
            {thread.title}
          </Link> <br></br>
          {`by ${thread.user.username}`}
        </li>
      ))}
    </>
  </section>
);

export default Threads;
