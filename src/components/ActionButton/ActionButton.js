import React from "react";

// styles
import "./ActionButton.scss";

const ActionButton = ({ handleClick, children }) => {
  return (
    <div className="ActionButton" onClick={handleClick}>
      {children}
    </div>
  );
};

export default ActionButton;
