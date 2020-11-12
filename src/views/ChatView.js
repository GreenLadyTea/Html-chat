import React from "react";
import Form from "../components/Form/Form";
import MessagesList from "../components/MessagesList";
import Cloud from "../components/Cloud";
import Bird from "../components/Bird";

const URL = "http://localhost:3000";

export default class ChatView extends React.Component {
  constructor() {
    super();
    this.timer = null;
    this.state = {
      serverMessages: []
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.getMessages.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  postMessage(newMessage) {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", URL);
    xhr.send(
      JSON.stringify({
        nick: newMessage.nick,
        message: newMessage.message
      })
    );

    xhr.onload = () => this.handleOnload(xhr);

    xhr.onerror = function () {
      console.log("Запрос не удался");
    };
  }

  getMessages() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.send();
    xhr.onload = () => this.handleOnload(xhr);
  }

  handleOnload(xhr) {
    if (xhr.status !== 200) {
      console.error("Ошибка!");
    } else {
      this.parseMessages(xhr.response);
    }
  }

  parseMessages(response) {
    const newServerMessages = JSON.parse(response);
    this.setState({ serverMessages: newServerMessages });
  }

  render() {
    const { serverMessages } = this.state;
    return (
      <>
        <h1>Чат</h1>
        <Cloud />
        <Form postMessage={(newMessage) => this.postMessage(newMessage)} />
        <MessagesList messages={serverMessages} />
        <Bird />
      </>
    );
  }
}
