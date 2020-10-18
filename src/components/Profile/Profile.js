import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Profile.scss";

const Profile = () => {
  return (
 

    
    <div className="Profile">
      <div className="InfoProfile">
        <img className="ImgProfile" src="img/download.jpg" />
      </div>
      <div className="CardMask"></div>
      <div className="CardBody">
        <div className="CardInfo">
          <div className="CardName">Mèo Anh</div>
          <div className="CardAge">5</div>
         
        </div> 
        <div className="btnInfo">

        <Link to="/change"> <button className="btnEditInfo">Sửa Thông Tin</button> </Link> 
        </div>
      </div>
    </div>
 
  );
};

export default Profile;
