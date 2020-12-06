import React from "react";
import "./styles.css";

class MessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nick: "",
      message: ""
    };
  }

  handleSend() {
    this.props.postMessage({
      nick: this.state.nick,
      message: this.state.message
    });
    this.setState({
      nick: "",
      message: ""
    });
  }

  render() {
    const { nick, message } = this.state;
    return (
      <form className="inputs">
        <input value={nick} type="text" onChange={(e) => this.setState({ nick: e.target.value })} />
        <br />
        <textarea value={message} onChange={(e) => this.setState({ message: e.target.value })} />
        <br />
        <input type="button" value="отправить" onClick={() => this.handleSend()} />
      </form>
    );
  }
}

export default MessageForm;
