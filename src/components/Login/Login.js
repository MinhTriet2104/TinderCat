import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { useHistory, Redirect, Link } from "react-router-dom";

// components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// styles
import "./Login.scss";

// images
import GoogleIcon from "../../images/google_icon.svg";
import FacebookIcon from "../../images/facebook_icon.svg";

const Login = () => {
  const history = useHistory();

  const responseFacebook = async (res) => {
    if (res.status !== "unknown") {
      localStorage.setItem("accessToken", res.accessToken);
      history.replace("/");
      console.log(res);
    }
  };

  const responseGoogle = async (res) => {
    console.log(res);
  };

  if (localStorage.getItem("accessToken")) return <Redirect to="/" />;

  return (
    <div className="LoginContainer">
      <div className="LoginWrapper">
        <div className="LeftSection"></div>
        <div className="RightSection">
          <h2 className="LoginTitle">Login With</h2>

          <TextField label="Username" />
          <TextField label="Password" />

          <div className="ButtonGroup">
            <Button variant="outlined" color="primary">
              Login
            </Button>
            <Link to="/signup" className="AvatarWrapper">
            <Button variant="outlined" color="secondary">
              SignUp
            </Button>
            </Link>
          </div>

          <h5>Or With</h5>

          <FacebookLogin
            appId="661692841097516"
            textButton="FACEBOOK"
            fields="name,email,picture"
            callback={responseFacebook}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="gg-login-btn">
                <span
                  className="icon"
                  style={{
                    backgroundImage: `url(${FacebookIcon})`,
                  }}
                ></span>
                <span className="text">Facebook</span>
              </button>
            )}
          />

          <GoogleLogin
            clientId="738277559607-qmkk4k8rared9tltub646d02oq8bvkuf.apps.googleusercontent.com"
            buttonText="GOOGLE"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="gg-login-btn"
              >
                <span
                  className="icon"
                  style={{
                    backgroundImage: `url(${GoogleIcon})`,
                  }}
                ></span>
                <span className="text">Google</span>
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
