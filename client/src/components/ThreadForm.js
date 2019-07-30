import React from 'react';

const ThreadForm = () => (
  <div className="thread-form">
    <form>
      <label htmlFor="title">title</label>
      <input id="title" name="title" />
      <br />
      <label htmlFor="content">message</label>
      <textarea id="content" name="content" placeholder="Write a message..." />
      <button>Post Thread</button>
    </form>
  </div>
);

export default ThreadForm;
