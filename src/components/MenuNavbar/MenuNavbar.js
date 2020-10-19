import React from "react";
import LikeList from "../LikeList/LikeList";
import "../LikeList/LikeList.scss";

// styles
import "./MenuNavbar.scss";

const MenuNavbar = () => {
  //Nhu
  const handleLikeClick = () => {
    document.getElementById("likeList").style.visibility = 'visible';
    //Huyen
    document.getElementById("superLikeList").style.visibility = 'hidden';
  }
  //Nhu
  const handleSuperLikeClick = () => {
    document.getElementById("likeList").style.visibility = 'hidden';
    //Huyen
    document.getElementById("superLikeList").style.visibility = 'visible';
  }
  return (
    <div className="MenuNavbar">
      <button className="MenuButton" onClick={handleLikeClick}>Like</button>
      <button className="MenuButton" onClick={handleSuperLikeClick}>Super Like</button>
    </div>
  );
};

export default MenuNavbar;
