import { BrowserRouter as Router, Link } from "react-router-dom";

import React from "react";

import "./ChangeProfile.scss";

const ChangeProfile = () => {
  return (
    <div className="all">
      <div className="ChangeInfo">
      <div className="CardMask"></div>

        <div className="CardBody">
          <div className="About">
            <label htmlFor="textAbout"> GIỚI THIỆU MÈO</label>
            
            <textarea
              className="textAbout"
              name="message"
              rows="10"
              cols="30"
              maxLength="500"
            >
              Sống nội tâm =))) 
            </textarea>

            <label htmlFor="nameAbout"> TÊN</label>

            <input
              name="nameAbout"
              className="nameAbout"
              type="text"
              maxLength="500"/>
            <label htmlFor="ageAbout"> TUỔI</label>

            <input
              name="ageAbout"
              className="ageAbout"
              type="text"
              maxLength="500"
            />
            <label htmlFor="hobbyAbout"> SỞ THÍCH</label>
            <Link className="LinkH" to="/hobby">
            <div
              className="hobbyAbout"
            > Thêm sở thích</div>
            </Link>
            <label htmlFor="ganderAbout"> GIỚI TÍNH</label>
            <div className="Select_na">
              <select className="ganderAbout">
                <option value={0}>Chọn:</option>

                <option value={1}>Nam</option>
                <option value={2}>Nữ</option>

                <option value={3}>Khác</option>
              </select>
            </div>
          </div>

        <Link to="/profile">  <button className="btnSave">Lưu</button></Link> 
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
