import React, { Component } from "react";

import Link from "../../common/CustomLink";

import "./ChangeProfile.scss";
class ChangeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 500
    };
  }
  render() {
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
                maxLength="488"
                defaultValue=""
                onKeyPress={() =>
                  this.setState({ count: this.state.count - 1 })
                }
              />
              <p className="countText"> {this.state.count} </p>

              <label htmlFor="nameAbout"> TÊN</label>

              <input
                name="nameAbout"
                className="nameAbout"
                type="text"
                maxLength="500"
                defaultValue="Mèo Tam thể "
              />

              <label htmlFor="ageAbout"> TUỔI</label>

              <input
                name="ageAbout"
                className="ageAbout"
                type="text"
                maxLength="500"
                defaultValue="5"
              />
              <label htmlFor="hobbyAbout"> SỞ THÍCH</label>
              <Link className="LinkH" to="/hobby">
                <div className="hobbyAbout"> Thêm sở thích</div>
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

            <Link to="/profile">
              <button className="btnSave">Lưu</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeProfile;
