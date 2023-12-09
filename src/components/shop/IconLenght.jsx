import React from "react";
import { useSelector } from "react-redux";
import { IconShopStyled, IconNumber } from "../Header/HeaderStyles";
import { FaShoppingCart } from "react-icons/fa";

// Función para que aparezca al lado del ícono del carrito la cantidad de productos:

export const IconLength = () => {
  const shopItems = useSelector((state) => state.shop.shopItems); // Obtiene los productos del carrito desde el store

  return (
    <>
      <IconShopStyled>
        <FaShoppingCart />
        <IconNumber>{shopItems.length}</IconNumber>
      </IconShopStyled>
    </>
  );
};
