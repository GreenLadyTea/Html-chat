import React from "react";
import apiService from "../apiService";
import styles from "./RegistrationView.module.css";

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

  validate() {
    if (this.state.nickname.length === 0) {
      this.setState({
        errorMessage: "Введите никнейм"
      });
      return false;
    }

    if (this.state.password.length === 0) {
      this.setState({
        errorMessage: "Введите пароль"
      });
      return false;
    }

    if (this.state.password.length < 7) {
      this.setState({
        errorMessage: "Длина пароля должна быть 7 и более символов"
      });
      return false;
    }

    return true;
  }

  handleSubmit(event) {
    const { nickname, password } = this.state;
    event.preventDefault();
    this.setState({
      errorMessage: "",
      successMessage: ""
    });

    if (!this.validate()) return;

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
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
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
