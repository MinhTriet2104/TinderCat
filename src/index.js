import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import thunk from "redux-thunk";

import App from './containers/App';
import Login from "./components/Login/Login";

import './index.scss'

import reducer from "./reducers/index";

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
          
          <Route exact path="/" component={App}>
            <Redirect to="/login" />
          </Route>

          <Route exact path="/login" component={Login} />

        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
