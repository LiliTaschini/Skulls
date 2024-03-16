import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { purple, grey } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: "8px",
    height: "18px",
    right: -6,
    top: 0,
    backgroundColor: purple[400],
    fontSize: "12px",
    padding: "0 4px",
  },
}));

export const CartWidget = () => {
  return (
    <>
      <IconButton className="navbar__cart" aria-label="cart">
        <StyledBadge badgeContent={8} color="secondary">
          <ShoppingCartIcon sx={{ fontSize: 25, color: grey[50] }} />
        </StyledBadge>
      </IconButton>
    </>
  );
};
