import React from "react";
import "./Header.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="Title">
        <Link className="LinkText" to={"learning"}>
          Abacus
        </Link>
        <div className="Name">
          <Link to={"settings"}>Name McPlaceHolder</Link>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
