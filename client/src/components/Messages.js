/* eslint-disable no-shadow */
import React from 'react';

const Messages = ({ messages }) => (
  <section className="content">
    <>
      {messages.map(message => (
        <li key={message._id}>
          {`${message.user.username} : ${message.content}`}
        </li>
      ))}
    </>
  </section>
);

export default Messages;
