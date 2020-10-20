import React, {useState} from "react";

// component
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar/HeaderAsideNavbar";
import LikeList from "../../components/LikeList/LikeList";
import MenuNavbar from "../../components/MenuNavbar/MenuNavbar";
import SuperLikeList from "../../components/SuperLikeList/SuperLikeList";

// style
import "./AsideNavbar.scss";

const AsideNavbar = () => {
  const [isLikeList, setIsLikeList] = useState(true)

  return (
    <aside className="AsideNavbar">
      <HeaderAsideNavbar />
      <MenuNavbar handleMenuChange={setIsLikeList} isLikeList={isLikeList} />
      {isLikeList ? <LikeList/> : <SuperLikeList/>}
    
    </aside>
  );
};

export default AsideNavbar;
