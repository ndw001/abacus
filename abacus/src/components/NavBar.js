import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Uncapitalizer from "./StringFunctions.js";

function NavBar() {
  const tabs = ["Learning", "Worksheets", "Notes", "Settings"];

  return (
    <div className="NavBar">
      {tabs.map((tab) => {
        const route = Uncapitalizer(tab);
        return (
          <div className="NavTab" key={tab}>
            <Link className="LinkText" to={route}>
              {tab}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default NavBar;
