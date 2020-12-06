import React from "react";

export default class Message extends React.Component {
  render() {
    const { nick, content } = this.props;
    return (
      <div>
        <b>{nick}: </b>
        {content}
      </div>
    );
  }
}
