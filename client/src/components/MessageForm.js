import React from 'react';


const MessageForm = () => {
  const handleOnSubmit = event => (event.preventDefault());
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
