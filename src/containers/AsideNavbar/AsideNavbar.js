import React from "react";

// component
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar/HeaderAsideNavbar";
import LikeList from "../../components/LikeList/LikeList";
import MenuNavbar from "../../components/MenuNavbar/MenuNavbar";
import SuperLikeList from "../../components/SuperLikeList/SuperLikeList";

// style
import "./AsideNavbar.scss";

const AsideNavbar = () => {
  return (
    <aside className="AsideNavbar">
      <HeaderAsideNavbar />
      <MenuNavbar />
      <LikeList/>
      <SuperLikeList/>
    </aside>
  );
};

export default AsideNavbar;
