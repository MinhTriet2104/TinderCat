import React from "react";
import { Route } from "react-router-dom";

// Components
import ChangeProfile from "./ChangeProfile";
import Profile from "./Profile";
import Hobby from "./Hobby/Hobby";

// styles
import "./MainProfile.scss";

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
