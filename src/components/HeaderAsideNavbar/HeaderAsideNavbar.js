import React from "react";

// Components
import Link from '../../common/CustomLink';

// style
import "./HeaderAsideNavbar.scss";

const HeaderAsideNavbar = () => {
  return (
    <div className="HeaderAsideNavbar">
      <Link to="/profile" className="AvatarWrapper">
        <img
          src="https://lh3.googleusercontent.com/RL_MLPh9TeGBK4x2PKRGdkp8-OOh6wONlTIj2cHtspxuLODhhtclF0D5gXhl89iPmCo"
          alt="avatar"
          className="avatar"
        />
      </Link>
      <h2>Mèo Tam Thể</h2>
    </div>
  );
};

export default HeaderAsideNavbar;
