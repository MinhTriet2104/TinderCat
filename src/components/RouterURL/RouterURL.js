import React, { Component, Profiler } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from "../Card/Card";
import Profile from "../Profile/Profile";
import ChangeInfo from "../Profile/ChangeInfo";

class RouterURL extends Component {
  render() {
    return (
      <div>
       
    <Route path="/" exact component={Card}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/change" component={ChangeInfo}/>

      </div>
    );
  }
}

export default RouterURL;
