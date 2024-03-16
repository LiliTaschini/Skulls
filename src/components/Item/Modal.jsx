import React, { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Favorite } from "./Favorite";

export const Modal = ({
  onClose,
  selectedItem,
  stock,
  initial,
  onAdd,
  isFavorite,
  handleFavorite,
}) => {
  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close__btn">
          <Favorite isFavorite={isFavorite} handleFavorite={handleFavorite} />
          <button onClick={onClose}>X</button>
        </div>
        <div className="conteiner__details">
          <img
            className="details__principal__img"
            src={selectedItem.image}
            alt="image selectItem"
          />
          <div>
            <h2>{selectedItem.longTitle}</h2>
            <p>{selectedItem.seller}</p>
            <p>{`Price: $${selectedItem.price}`}</p>
            <ul className="details__variations">
              {selectedItem.detail.map((variation, index) => (
                <li key={index}>
                  <span>{variation.name}</span>
                  <img src={variation.thumbnail} alt={variation.name} />
                </li>
              ))}
            </ul>
          </div>
          <ItemCount onAdd={onAdd} initial={initial} stock={stock} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
