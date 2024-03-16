import React, { useEffect, useState } from "react";
import { GetItem } from "../ItemDetailContainer/GetItem";
import { Item } from "../Item/Item";
import { useLocation } from "react-router-dom";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();

  const messagesClothes = [
    "- - - SHOP CLOTHES - - -",
    "BE DIFERENT",
    "BE FRESH",
  ];

  const messagesTech = [
    "- - - SHOP TECH - - -",
    "PLAY ALL TIME",
    "PLAY ALL DAY",
  ];

  const updateItem = (newItem) => {
    setItems((prevItems) => {
      if (!prevItems.some((item) => item.id === newItem.id)) {
        return [...prevItems, newItem];
      }
      return prevItems;
    });
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <>
      {location.pathname === "/category/clothes" ? (
        <ItemListContainer greeting={messagesClothes} />
      ) : (
        <ItemListContainer greeting={messagesTech} />
      )}

      <div className="container__cards">
        <GetItem updateItem={updateItem} clearItems={clearItems} />
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};
