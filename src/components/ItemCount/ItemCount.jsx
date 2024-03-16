import React, { useState } from "react";
import CardActions from "@mui/material/CardActions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)({
  backgroundColor: "#353432",
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

export const ItemCount = ({ stock, initial, onAdd }) => {
  return (
    <CardActions className="card__actions">
      <IconButton
        onClick={() => onAdd("-")}
        color="primary"
        aria-label="add to shopping cart"
      >
        <RemoveIcon sx={{ fontSize: 25, color: "#8f3e8d" }} />
      </IconButton>
      <p>{initial}</p>
      <IconButton
        onClick={() => onAdd("+")}
        color="primary"
        aria-label="add to shopping cart"
      >
        <AddIcon sx={{ fontSize: 25, color: "#8f3e8d" }} />
      </IconButton>
      <StyledButton
        onClick={() => onAdd(value)}
        disabled={!stock}
        size="small"
        variant="contained"
        sx={{ fontSize: 15, color: "#fffff", textTransform: "capitalize" }}
      >
        Add
      </StyledButton>
    </CardActions>
  );
};
