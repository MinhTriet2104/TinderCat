import React from "react";

import Link from "../../../common/CustomLink";

import "./Hobby.scss";

const Hobby = () => {
  return (
    <div className="SelectHobby">
      <div className="CardMask"></div>

      <div className="CardBody">
        <div className="EditHobby">
          {" "}
          Sửa sở thích{" "}
          <Link className="linkD" to="/profile">
            <span className="Done">Xong</span>{" "}
          </Link>{" "}
        </div>
        <div className="DesH">
          {" "}
          Chọn sở thích mà bạn muốn chia sẻ với những người có kết nối với mình
        </div>
        <div className="NumberHobby">
          {" "}
          SỞ THÍCH <span className="num">(0/5)</span>{" "}
        </div>
        <button className="hobby">Đồ ăn</button>
        <button className="hobby">Leo núi</button>
        <button className="hobby">Thể thao điện tử</button>
        <button className="hobby">Tour ẩm thực</button>
        <button className="hobby">KaraoKe</button>
      </div>
    </div>
  );
};

export default Hobby;
