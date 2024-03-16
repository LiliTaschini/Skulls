import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Favorite = ({ isFavorite, handleFavorite }) => {
  return (
    <>
      <IconButton aria-label="favorite" onClick={handleFavorite}>
        {isFavorite ? (
          <FavoriteIcon sx={{ color: "#ff3d47" }} fontSize="inherit" />
        ) : (
          <FavoriteIcon fontSize="inherit" />
        )}
      </IconButton>
    </>
  );
};
