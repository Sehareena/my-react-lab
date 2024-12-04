import React from 'react';
import './style/Messages.css';

function Messages({ messagesData }) {
  return (
    <div className="messages">
      <h2>Messages</h2>
      <ul>
        {messagesData.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
