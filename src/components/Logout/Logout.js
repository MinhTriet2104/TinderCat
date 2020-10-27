import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();
  
  function handleClick() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    history.replace("/login");
  }

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-outline-secondary"
        style={{
          color: `#000`,
        }}
      >
        <img
          src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/logout_close_sign_out_exit_access-512.png"
          alt="logout"
          style={{
            width: `15px`,
            marginRight: `10px`,
          }}
        />
        Logout
      </button>
    </div>
  );
}

export default Logout;
