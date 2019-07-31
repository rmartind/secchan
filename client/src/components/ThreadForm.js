import React from 'react';

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

export default ThreadForm;
