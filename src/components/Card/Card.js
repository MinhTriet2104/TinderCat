import React from "react";

import "./Card.scss";

const Card = () => {
  return (
    <div className="Card">
      <div
        className="CardImage"
        style={{
          backgroundImage: `url(https://i.pinimg.com/564x/fa/a2/b8/faa2b89e8b3889bbf7310b113e74ced9.jpg)`,
        }}
      ></div>
    </div>
  );
};

export default Card;
