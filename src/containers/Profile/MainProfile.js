import React from "react";
import { Route } from "react-router-dom";
import Link from "../../common/CustomLink";


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
      <Link to="/">
        <img
          alt="next"
          className="toListItem"
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png"
        />
      </Link>
    </div>
  );
};

export default MainProfile;
