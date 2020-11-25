import React from "react";
import apiService from "../apiService";

export default class RegistrationView extends React.Component {
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
    apiService.user
      .create({
        nickname: nickname,
        password: password
      })
      .then(() => {
        this.setState({ successMessage: "Пользователь успешно зарегистрирован!" });
        setTimeout(() => this.props.history.push("/login"), 2000);
      })
      .catch((error) => this.setState({ errorMessage: "Ошибка: " + error.response.data.error }));
  }

  render() {
    const { nickname, password, errorMessage, successMessage } = this.state;
    return (
      <>
        <h1>Регистрация</h1>
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
          <button type="submit">Создать пользователя</button>
        </form>
      </>
    );
  }
}
