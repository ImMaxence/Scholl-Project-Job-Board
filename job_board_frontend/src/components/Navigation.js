import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/home" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Company Offer</li>
        </NavLink>
        <NavLink to="/particular" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Particular Offer</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
