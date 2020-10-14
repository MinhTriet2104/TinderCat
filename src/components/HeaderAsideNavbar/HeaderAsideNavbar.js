import React from "react";

// style
import "./HeaderAsideNavbar.scss";

const HeaderAsideNavbar = () => {
  return (
    <div className="HeaderAsideNavbar">
      <div className="AvatarWrapper">
        <img
          src="https://lh3.googleusercontent.com/RL_MLPh9TeGBK4x2PKRGdkp8-OOh6wONlTIj2cHtspxuLODhhtclF0D5gXhl89iPmCo"
          alt="avatar"
          className="avatar"
        />
      </div>
      <h2>Mèo Tam Thể</h2>
    </div>
  );
};

export default HeaderAsideNavbar;
