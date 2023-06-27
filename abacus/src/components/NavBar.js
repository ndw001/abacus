import React from "react";
import "./NavBar.css";

function NavBar() {
  const tabs = ["Learning", "Worksheets", "Notes", "Settings"];

  return (
    <div className="NavBar">
      {tabs.map((tab) => (
        <div className="NavTab" key={tab}>
          {tab}
        </div>
      ))}
    </div>
  );
}

export default NavBar;
