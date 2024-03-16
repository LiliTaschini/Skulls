import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBarButton = ({ onClick }) => {
  return (
    <div className="navbar__container__buttons">
      <CartWidget />
      <button className="navbar__button" onClick={onClick}>
        <p className="navbar__button__menu">MENU</p>
        <div className="navbar__button__icon">
          <div className="navbar__first__line"></div>
          <div className="navbar__second__line"></div>
          <div className="navbar__third__line"></div>
        </div>
      </button>
    </div>
  );
};
