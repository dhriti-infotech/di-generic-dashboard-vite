import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <img src="src/assets/images/dhriti-infotech-D-white.png" alt="Logo" className="logo" />
        <span className="title">Dhriti Infotech<span className="ex"></span> </span>
      </div>
      <div className="header-right">
        <button className="header-button">Option 1</button>
        <button className="header-button">Option 2</button>
      </div>
    </header>
  );
};

export default Header;
