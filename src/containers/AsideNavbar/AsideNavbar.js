import React from "react";

// component
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar/HeaderAsideNavbar";
import MenuNavbar from "../../components/MenuNavbar/MenuNavbar";

// style
import "./AsideNavbar.scss";

const AsideNavbar = () => {
  return (
    <aside className="navbar">
      <HeaderAsideNavbar />
      <MenuNavbar />
    </aside>
  );
};

export default AsideNavbar;
