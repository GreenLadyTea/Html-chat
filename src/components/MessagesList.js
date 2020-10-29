import React from "react";
import Message from "./Message";

class MessagesList extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="list-of-messages">
        {messages.map((message, index) => (
          <Message nick={message.nick} message={message.message} key={index} />
        ))}
      </div>
    );
  }
}

export default MessagesList;
