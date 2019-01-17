import React, { Component } from "react";
import { getUser } from "./services/authService";
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

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
