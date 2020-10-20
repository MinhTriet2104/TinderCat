import React from "react";

import Link from "../../common/CustomLink";

import "./Profile.scss";

const Profile = () => {

  return (
    <div className="Profile">
      
      <div className="InfoProfile">
        <img className="ImgProfile" alt="img" src="img/download.jpg" />
      </div>
      <div className="CardMask"></div>
      <div className="CardBody">
        <div className="CardInfo">
          <div className="CardName">Mèo Anh</div>
          <div className="CardAge">5</div>
        </div>
        <div className="btnInfo">
          <Link to="/change">
            {" "}
            <button className="btnEditInfo">Sửa Thông Tin</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
