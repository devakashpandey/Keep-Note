import React from "react";
import "./Header.css";
import img from "../../asset/icon2.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={img} alt="img" height="45px" width="50px"></img>
        <h1 className="keep-head">Keep Notes</h1>
      </div>
    </>
  );
};

export default Header;
