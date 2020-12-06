import React from "react";

export default class Message extends React.Component {
  render() {
    const { nickname, content } = this.props;
    return (
      <div>
        <b>{nickname}: </b>
        {content}
      </div>
    );
  }
}
