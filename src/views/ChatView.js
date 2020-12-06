import React from "react";
import MessageForm from "../components/MessageForm/MessageForm";
import MessagesList from "../components/MessagesList";
import Cloud from "../components/Cloud";
import Bird from "../components/Bird";
import apiService from "../apiService";

export default class ChatView extends React.Component {
  constructor() {
    super();
    this.timer = null;
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.getMessages.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  postMessage({ content }) {
    apiService.message
      .create({ content, chatId: this.props.match.params.id })
      .then(() => apiService.message.getMessages(this.props.match.params.id))
      .then((response) => response.data)
      .then((messages) => this.setState({ messages }));
  }

  getMessages() {
    apiService.message
      .getMessages(this.props.match.params.id)
      .then((response) => response.data)
      .then((messages) => this.setState({ messages }));
  }

  render() {
    const { messages } = this.state;
    return (
      <>
        <h1>Чат</h1>
        <Cloud />
        <MessageForm postMessage={(newMessage) => this.postMessage(newMessage)} />
        <MessagesList messages={messages} />
        <Bird />
      </>
    );
  }
}
