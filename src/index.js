import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import thunk from "redux-thunk";

import App from "./containers/App";
import Login from "./components/Login/Login";

import "./index.scss";

import reducer from "./reducers/index";
import SignUp from "./components/SignUp/SignUp";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          {/* <Route path="/" component={App} /> */}

          <Route exact path="/signup" component={SignUp} />
          <Route path="/" component={App}>
            {/* {localStorage.getItem("accessToken") ? null : (
              <Redirect to="/login" />
            )} */}
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
