import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegistrationView from "./views/RegistrationView";
import ChatView from "./views/ChatView";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <>
        <span>
          <Link to="/login">Логин</Link>
        </span>
        <span>
          <Link to="/registration">Регистрация</Link>
        </span>
        <span>
          <Link to="/chat">Чат</Link>
        </span>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/registration" component={RegistrationView} />
          <Route path="/chat" component={ChatView} />
          <Redirect exact from="/" to="/login" />
        </Switch>
      </>
    );
  }
}
