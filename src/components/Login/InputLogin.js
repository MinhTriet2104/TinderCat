import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions/index";
import Link from "../../common/CustomLink";
import { Redirect } from "react-router-dom";
// components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Form } from "react-bootstrap";
class InputLogin extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userLogin(this.state);
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
            variant="outlined"
            color="primary"
            className="btn btn-outline-success"
          >
            Login
          </button>
          <Link to="/signup">
            <button
              variant="outlined"
              color="secondary"
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

const mapDispatchToProps = (dispatch) => ({
  userLogin: (userInfo) => dispatch(userLogin(userInfo)),
});

export default connect(null, mapDispatchToProps)(InputLogin);
