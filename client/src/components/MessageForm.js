import React from 'react';


const MessageForm = ({ addMessage, currentThread }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const message = {
      channelID: currentThread.channelID,
      threadID: currentThread._id,
      content: event.target.content.value,
    };
    addMessage(message);
  };
  return (
    <div className="message-form">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="content">Reply</label>
        <textarea id="content" name="content" placeholder="Reply to this thread..." />
        <button>Reply</button>
      </form>
    </div>
  );
};

export default MessageForm;
