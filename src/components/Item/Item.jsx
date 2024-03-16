import React, { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import Modal from "./Modal";
import { Favorite } from "./Favorite";
import { Link } from "react-router-dom";

export function Item({ item }) {
  const [isFavorite, setFavorite] = useState(false);
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  let stock = 10;

  const onAdd = (expr) => {
    if (expr === "+") {
      if (value < stock) {
        setValue(value + 1);
      }
    } else {
      if (stock > 0 && value > 0) {
        setValue(value - 1);
      }
    }
  };

  const handleFavorite = () => {
    setFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card">
        <div className="card__header">
          <h4 className="card__title">{`$${item.price}`}</h4>
          <Favorite isFavorite={isFavorite} handleFavorite={handleFavorite} />
        </div>
        <div className="container__card" onClick={() => openModal(item)}>
          <img src={item.image} alt={item.title} className="card__media" />
        </div>
        <div className="card__content">
          <p>{item.title}</p>
          <ItemCount
            className="card__item__count"
            onAdd={onAdd}
            initial={value}
          />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          selectedItem={selectedItem}
          stock={stock}
          onAdd={onAdd}
          initial={value}
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
        />
      )}
    </>
  );
}
