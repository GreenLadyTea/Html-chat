import React from "react";
import apiService from "../apiService";

export default class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      errorMessage: ""
    };
  }

  componentDidMount() {
    apiService.user
      .getProfile()
      .then((response) => response.data)
      .then((user) => this.setState({ user }))
      .catch((error) => this.setState({ errorMessage: "Ошибка: " + error.response.data.error }));
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
      </>
    );
  }
}
