import React from "react";
<<<<<<< Updated upstream

// Components
import Link from '../../common/CustomLink';

=======
import { BrowserRouter as Router, Link } from "react-router-dom";
>>>>>>> Stashed changes
// style
import "./HeaderAsideNavbar.scss";

const HeaderAsideNavbar = () => {
  return (
    <div className="HeaderAsideNavbar">
<<<<<<< Updated upstream
      <Link to="/profile" className="AvatarWrapper">
        <img
          src="https://lh3.googleusercontent.com/RL_MLPh9TeGBK4x2PKRGdkp8-OOh6wONlTIj2cHtspxuLODhhtclF0D5gXhl89iPmCo"
          alt="avatar"
          className="avatar"
        />
      </Link>
=======
      <div className="AvatarWrapper">
          <Link to="/profile">
            <img
              src="https://lh3.googleusercontent.com/RL_MLPh9TeGBK4x2PKRGdkp8-OOh6wONlTIj2cHtspxuLODhhtclF0D5gXhl89iPmCo"
              alt="avatar"
              className="avatar"
            />
          </Link>
      </div>
>>>>>>> Stashed changes
      <h2>Mèo Tam Thể</h2>
    </div>
  );
};

export default HeaderAsideNavbar;
