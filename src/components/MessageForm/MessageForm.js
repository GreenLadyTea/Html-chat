import React from "react";
import "./styles.css";

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  handleSend(event) {
    event.preventDefault();
    this.props.postMessage({
      content: this.state.content
    });
    this.setState({
      content: ""
    });
  }

  render() {
    const { content } = this.state;
    return (
      <form className="inputs" onSubmit={(event) => this.handleSend(event)}>
        <input
          value={content}
          type="text"
          onChange={(e) => this.setState({ content: e.target.value })}
        />
        <br />
        <button type="submit">отправить</button>
      </form>
    );
  }
}
