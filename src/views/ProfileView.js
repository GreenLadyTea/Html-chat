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
      searchChats: []
    };
  }

  componentDidMount() {
    apiService.user
      .getCurrent()
      .then((response) => response.data)
      .then((user) => this.setState({ user }))
      .then(() => this.getChatList());
  }

  handleCreateChat({ title }) {
    apiService.chat.create({ title }).then(() => this.getChatList());
  }

  getChatList() {
    apiService.chat
      .getMyChats(this.state.user.id)
      .then((response) => response.data)
      .then((chats) => this.setState({ chats }));
  }

  handleChatClick(id) {
    this.props.history.push(`/chat/${id}`);
  }

  handleSearchChat({ title }) {
    apiService.chat
      .search(title)
      .then((response) => response.data)
      .then((searchChats) => this.setState({ searchChats }));
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
        <ChatList list={this.state.chats} clickHandle={(id) => this.handleChatClick(id)} />
        <ChatForm handleSubmit={(data) => this.handleCreateChat(data)} />

        <SearchChatForm handleSubmit={(params) => this.handleSearchChat(params)} />
        <ChatList list={this.state.searchChats} clickHandle={(id) => this.handleChatClick(id)} />
      </>
    );
  }
}
