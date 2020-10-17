import React, { Profiler } from "react";

// Components

import "./MainProfile.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ChangeProfile from "./ChangeProfile";
import Profile from "./Profile";
import Hobby from "./Hobby/Hobby";
const MainProfile = () => {
  return (
    <div className="MainContent">
         <Route  path="/profile" component={Profile} />
        <Route  path="/change" component={ChangeProfile} />
        <Route  path="/hobby" component={Hobby} />
      </div>
  );
};

export default MainProfile;
