import React, { Component } from "react";
import { getUser, logout } from "./services/authService";
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm";
import Profile from "./components/Profile";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      form: "signup"
    };
  }

  checkForUser() {
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }
  componentDidMount() {
    this.checkForUser();
  }

  changeForm = type => {
    console.log(type);
    this.setState({
      form: type
    });
  };

  login = () => {
    const user = getUser();
    this.setState({ user });
  };

  logout = () => {
    logout();
    this.setState({ user: null });
  };

  getProducts = () => {};

  render() {
    return (
      <div>
        <NavBar
          user={this.state.user}
          changeForm={this.changeForm}
          logout={this.logout}
          getProducts={this.getProducts}
        />
        <div className="container">
          {this.state.user ? (
            <Profile user={this.state.user} />
          ) : (
            <AuthForm form={this.state.form} onLogin={this.login} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
