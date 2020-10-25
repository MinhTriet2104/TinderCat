import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPost} from '../../actions/index';
import { Redirect } from "react-router-dom";

class Signup extends Component {
    state = {
      username: "",
      password: "",
    }
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault()
      this.props.userPost(this.state)
    }
  
    render() {
      if (localStorage.getItem("accessToken")) return <Redirect to="/" />;
      return (
        <div className="LoginContainer">
        <div className="LoginWrapper">
          <div className="LeftSection"></div>
          <div className="RightSection">
            <h2 className="LoginTitle">Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-control"
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control"
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <input type='submit' className="btn btn-info" value="Send"/>
            </form>
          </div>
        </div>
      </div>
      )
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    userPost: user => dispatch(userPost(user))
  })
  
  export default connect(null, mapDispatchToProps)(Signup);