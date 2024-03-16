import React, { useState } from "react";
import { NavBarButton } from "./NavBarButton";
import { NavBarContent } from "./NavBarContent";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/no_chilla_no.png";

export const NavBar = () => {
  const [isContentOpen, setIsContentOpen] = useState(false);
  const toggleContent = () => {
    setIsContentOpen(!isContentOpen);
  };
  return (
    <>
      <nav>
        <Link to="/" className="brand__name">
          <img src={logo} alt="" width="70px" />
        </Link>
        <NavBarButton onClick={toggleContent} />
        <NavBarContent isContentOpen={isContentOpen} onClose={toggleContent} />
      </nav>
    </>
  );
};
