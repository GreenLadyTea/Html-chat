import React from "react";

export default class Message extends React.Component {
  render() {
    const { nick, message } = this.props;
    return (
      <div>
        <b>{nick}: </b>
        {message}
      </div>
    );
  }
}
