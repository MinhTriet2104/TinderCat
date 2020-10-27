import React, { Component } from "react";
import Link from "../../common/CustomLink";
import { Redirect } from "react-router-dom";
// components
import TextField from "@material-ui/core/TextField";

class InputLogin extends Component {
  state = {
    username: "",
    password: "",
  };

  userLogin = (user) => {
    return fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...user }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
        } else {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          // dispatch(loginUser(data.user));
        }
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.userLogin(this.state);
  };

  render() {
    if (localStorage.getItem("accessToken")) return <Redirect to="/" />;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Username"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <TextField
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <div className="ButtonGroup">
          <button
            className="btn btn-outline-success"
          >
            Login
          </button>
          <Link to="/signup">
            <button
              className="btn btn-outline-danger"
            >
              SignUp
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

export default InputLogin;
