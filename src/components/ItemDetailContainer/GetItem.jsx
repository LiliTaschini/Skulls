import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const GetItem = ({ updateItem, clearItems }) => {
  const location = useLocation();

  const cutTitle = (title) => {
    const words = title.split(" ");
    const truncatedWords = words.slice(0, 5);
    return truncatedWords.join(" ") + (words.length > 5 ? " . . ." : "");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let query = "";
        let category = "";
        if (location.pathname === "/category/clothes") {
          query = "Jhon Foos";
          category = "clothes";
        } else if (location.pathname === "/category/tech") {
          query = "Nintendo";
          category = "tech";
        }
        clearItems();
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
        const response = await fetch(url);
        const data = await response.json();
        const maxProducts = 8;
        let productsCount = 0;
        let addedVariations = {};

        data.results.forEach((product) => {
          console.log(data.results);
          if (productsCount < maxProducts) {
            const newItem = {
              title: cutTitle(product.title),
              price: product.price,
              id: product.id,
              image: `https://http2.mlstatic.com/D_${product.thumbnail_id}-O.jpg`,
              longTitle: product.title,
              seller: product.seller.nickname,
              categoryId: category,
              detail: Object.entries(
                product.variations_data ? product.variations_data : ""
              )
                .map(([key, value]) => ({
                  name: value.name,
                  thumbnail: value.thumbnail,
                }))
                .filter((variation) => {
                  if (!addedVariations[variation.name]) {
                    addedVariations[variation.name] = true;
                    return true;
                  }
                  return false;
                }),
            };
            updateItem(newItem);
            console.log(newItem);
            productsCount++;
          } else {
            return;
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [location.pathname]);

  return <></>;
};
