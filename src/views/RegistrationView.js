import React from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export default class RegistrationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      password: ""
    };
  }

  handleSubmit(event) {
    const { nickname, password } = this.state;
    axiosInstance.post("/user", { nickname, password });
    event.preventDefault();
  }

  render() {
    const { nickname, password } = this.state;
    return (
      <>
        <h1>Регистрация</h1>
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
