import React from 'react';

// eslint-disable-next-line react/prop-types
const Channels = ({ channels }) => (
  <section className="content">
    <ul>
      {console.log(channels)}
      {channels.map(channel => <li key={channel._id}>{channel.name}</li>)}
    </ul>
  </section>
);

export default Channels;
