import React, { Component } from 'react';

import Link from "../../../common/CustomLink";

import "./Hobby.scss";
class Hobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className="SelectHobby">
      <div className="CardMask"></div>

      <div className="CardBody">
        <div className="EditHobby">
          {" "}
          Sửa sở thích{" "}
          <Link className="linkD" to="/change">
            <span className="Done">Xong</span>{" "}
          </Link>{" "}
        </div>
        <div className="DesH">
          {" "}
          Chọn sở thích mà bạn muốn chia sẻ với những người có kết nối với mình
        </div>
        <div className="NumberHobby">
          {" "}
          SỞ THÍCH <span className="num">({this.state.count}/5)</span>{" "}
        </div>
        <button className="hobby" onClick={() => this.setState({ count: this.state.count + 1 })}>Đồ ăn</button>
        <button className="hobby" onClick={() => this.setState({ count: this.state.count + 1 })}>Leo núi</button>
        <button className="hobby" onClick={() => this.setState({ count: this.state.count + 1 })}>Thể thao điện tử</button>
        <button className="hobby" onClick={() => this.setState({ count: this.state.count + 1 })}>Tour ẩm thực</button>
        <button className="hobby" onClick={() => this.setState({ count: this.state.count + 1 })}>KaraoKe</button>
      </div>
    </div>
    );
  }
}

export default Hobby;

