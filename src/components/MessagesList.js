import React from "react";
import Message from "./Message";

export default class MessagesList extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div>
        {messages.map((message) => (
          <Message content={message.content} nickname={message.nickname} key={message.id} />
        ))}
      </div>
    );
  }
}
