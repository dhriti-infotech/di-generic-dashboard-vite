import React from "react";
import "./Header.css";
import logo from "../../../public/dhriti-infotech-D-white.png";
import cutekid from "../../../public/cute-kid-reading-books.png";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="title">
          Dhriti Infotech
          <img src={cutekid} alt="Separator" className="separator-icon" />
          PathShaala
          <span className="ex"></span>
        </span>
      </div>
      <div className="header-right">
        <button className="header-button">Option 1</button>
        <button className="header-button">Option 2</button>
      </div>
    </header>
  );
};

export default Header;
