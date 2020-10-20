import React from "react";
import "../LikeList/LikeList.scss";

// styles{}
import "./MenuNavbar.scss";

const MenuNavbar = ({ handleMenuChange, isLikeList }) => {


  return (
    <div className="MenuNavbar">
      <button
        className={`MenuButton ${isLikeList ? "active" : ""}`}
        onClick={() => handleMenuChange(true)}
      >
        Like
      </button>
      <button
        className={`MenuButton ${!isLikeList ? "active" : ""}`}
        onClick={() => handleMenuChange(false)}
      >
        Super Like
      </button>
    </div>
  );
};

export default MenuNavbar;
