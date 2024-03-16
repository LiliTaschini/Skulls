import React from "react";
import { NavLink, Link } from "react-router-dom";

export const NavBarContent = ({ isContentOpen, onClose }) => {
  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`navbar__content ${isContentOpen ? "open" : ""}`}>
      <NavLink
        to={"/about-us"}
        className="navbar__content__button"
        onClick={handleClick}
      >
        ABOUT US
      </NavLink>
      <NavLink
        to={"/category/clothes"}
        className="navbar__content__button"
        onClick={handleClick}
      >
        CLOTHES
      </NavLink>
      <NavLink
        to={"/category/tech"}
        className="navbar__content__button"
        onClick={handleClick}
      >
        TECH
      </NavLink>
      <NavLink
        to={"/support"}
        className="navbar__content__button"
        onClick={handleClick}
      >
        SUPPORT
      </NavLink>
    </div>
  );
};
