import React from "react";
import Message from "./Message";

class MessagesList extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="list-of-messages">
        {messages.map((message) => (
          <Message content={message.content} key={message.id} />
        ))}
      </div>
    );
  }
}

export default MessagesList;
