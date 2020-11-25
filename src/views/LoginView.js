import React from "react";
import apiService from "../apiService";

export default class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      password: "",
      errorMessage: "",
      successMessage: ""
    };
  }

  handleSubmit(event) {
    const { nickname, password } = this.state;
    event.preventDefault();
    this.setState({
      errorMessage: "",
      successMessage: ""
    });
    apiService.auth
      .login({
        nickname: nickname,
        password: password
      })
      .then(() => {
        this.setState({ successMessage: "Вход выполнен успешно!" });
        setTimeout(() => this.props.history.push("/profile"), 2000);
      })
      .catch((error) => this.setState({ errorMessage: "Ошибка: " + error.response.data.error }));
  }

  render() {
    const { nickname, password, errorMessage, successMessage } = this.state;
    return (
      <>
        <h1>Логин</h1>
        {errorMessage}
        {successMessage}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>
              Никнейм:
              <input
                type="text"
                value={nickname}
                onChange={(e) => this.setState({ nickname: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              Пароль:
              <input
                type="password"
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </label>
          </div>
          <button type="submit">Войти</button>
        </form>
      </>
    );
  }
}
