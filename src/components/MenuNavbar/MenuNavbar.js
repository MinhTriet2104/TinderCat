import React from "react";
import LikeList from "../LikeList/LikeList";
import "../LikeList/LikeList.scss";

// styles
import "./MenuNavbar.scss";

const MenuNavbar = () => {
  //Nhu
  const handleLikeClick = () => {
    document.getElementById("likeList").style.visibility = 'visible';
    document.getElementById("MenuButtonLike").style.borderBottom = '3px solid #fc6473';
    document.getElementById("MenuButtonSuperLike").style.borderBottom = '3px solid #fff';
  }
  //Nhu
  const handleSuperLikeClick = () => {
    document.getElementById("likeList").style.visibility = 'hidden';
    document.getElementById("MenuButtonLike").style.borderBottom = '3px solid #fff';
    document.getElementById("MenuButtonSuperLike").style.borderBottom = '3px solid #fc6473';
  }
  return (
    <div className="MenuNavbar">
      <button className="MenuButton" id="MenuButtonLike" onClick={handleLikeClick}>Like</button>
      <button className="MenuButton" id="MenuButtonSuperLike" onClick={handleSuperLikeClick}>Super Like</button>
    </div>
  );
};

export default MenuNavbar;
