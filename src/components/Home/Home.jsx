import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export function Home() {
  const messages = [
    "Welcome to SKULLS",
    "Explore the Unknown, Join the Adventure",
    "Take advantage of our 40% discounts for members and associates",
  ];
  const StyledButton = styled(Button)({
    backgroundColor: "#3A0B2E",
    "&:hover": {
      backgroundColor: "#9e4e9d",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    },
    "&:active": {
      backgroundColor: "#9e4e9d",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    },
    "&:focus": {
      backgroundColor: "#9e4e9d",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    },
  });

  return (
    <>
      <ItemListContainer greeting={messages} />
      <div className="home__container">
        <div className="circle__home circle__home__one"></div>
        <div className="circle__home circle__home__two"></div>
        <div className="circle__home circle__home__three"></div>
        <h3>
          Make your Outfit <span className="wonder">wonderful </span>
        </h3>
        <p>
          A fresh line designed and thought to give style and personalization to
          everything you want
        </p>
        <div className="buttons__home__container">
          <StyledButton className="button__material__ui" variant="contained">
            <Link className="removeAllDefaultStyles" to="/category/clothes">
              GO TO SHOPPING
            </Link>
          </StyledButton>
          <StyledButton
            className="button__material__ui"
            variant="contained"
            sx={{ background: "#3A0B2E" }}
          >
            <Link className="removeAllDefaultStyles" to="/support">
              CONTACT
            </Link>
          </StyledButton>
        </div>
      </div>
    </>
  );
}
