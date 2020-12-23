import React from "react";
import apiService from "../apiService";
import ChatForm from "../components/ChatForm";
import ChatList from "../components/ChatList";
import SearchChatForm from "../views/SearchChatForm";

export default class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      chats: [],
      foundChats: []
    };
  }

  componentDidMount() {
    apiService.user
      .getCurrent()
      .then((response) => response.data)
      .then((user) => this.setState({ user }))
      .then(() => this.getChatList());
  }

  handleChatCreate({ title }) {
    apiService.chat.create({ title }).then(() => this.getChatList());
  }

  getChatList() {
    apiService.chat
      .getMyChats(this.state.user.id)
      .then((response) => response.data)
      .then((chats) => this.setState({ chats }));
  }

  goHandler(id) {
    this.props.history.push(`/chat/${id}`);
  }

  joinHandler(id) {
    if (!confirm("Вы действительно хотите вступить в этот чат?")) return;
    apiService.chat.join(id).then(() => this.getChatList());
  }

  deleteHandler(id) {
    if (!confirm("Вы действительно хотите удалить этот чат?")) return;
    apiService.chat.delete(id).then(() => this.getChatList());
  }

  handleChatSearch({ title }) {
    apiService.chat
      .search(title)
      .then((response) => response.data)
      .then((foundChats) => this.setState({ foundChats }));
  }

  render() {
    const { user, errorMessage } = this.state;
    return (
      <>
        <h1>Профиль пользователя</h1>
        {this.state.user && (
          <>
            <div>ID: {user.id}</div>
            <div>Никнейм: {user.nickname}</div>
            <div>Создан: {new Date(user.createdAt).toLocaleString()}</div>
          </>
        )}
        {errorMessage}

        <h2>Мои чаты</h2>
        <ChatList
          userId={this.state.user?.id}
          list={this.state.chats}
          goHandler={(id) => this.goHandler(id)}
          joinHandler={(id) => this.joinHandler(id)}
          deleteHandler={(id) => this.deleteHandler(id)}
        />
        <ChatForm handleSubmit={(data) => this.handleChatCreate(data)} />
        <SearchChatForm handleSubmit={(data) => this.handleChatSearch(data)} />
        <ChatList
          userId={this.state.user?.id}
          list={this.state.foundChats}
          goHandler={(id) => this.goHandler(id)}
          joinHandler={(id) => this.joinHandler(id)}
          deleteHandler={(id) => this.deleteHandler(id)}
        />
      </>
    );
  }
}
