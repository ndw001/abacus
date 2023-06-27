import React from "react";
import "./Header.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="Header">
      <div className="Title">
        Abacus <div className="Name">Name McPlaceHolder</div>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
