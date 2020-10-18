import { BrowserRouter as Router, Link } from "react-router-dom";

import React from "react";

import "./ChangeInfo.scss";

const ChangeInfo = () => {
  return (
    <div className="all">
      <div className="ChangeInfo">
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
              maxLength="500"
              value="Mèo Anh"
            />
            <label htmlFor="ageAbout"> TUỔI</label>

            <input
              name="ageAbout"
              className="ageAbout"
              type="text"
              maxLength="500"
              value="5"
            />
            <label htmlFor="hobbyAbout"> SỞ THÍCH</label>

            <input
              name="hobbyAbout"
              placeholder="Thêm sở thích"
              className="hobbyAbout"
              type="text"
              maxLength="500"
            />
            <label htmlFor="ganderAbout"> GIỚI TÍNH</label>
            <div className="custom-select">
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

export default ChangeInfo;
