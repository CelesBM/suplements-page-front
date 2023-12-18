import React from "react";
import { useAppMenuContext } from "../../Context/ContextMenu";

import {
  LinkHamburguerContainerStyled,
  ItemHamburguerMenuStyled,
  LinkHamburguerStyled,
  MotionDivStyled,
} from "../Header/HeaderStyles";

// Menú desplegable del menú mobile:

export const HamburguerMenu = () => {
  const { isMenuOpen, toggleMenu } = useAppMenuContext(); // Context para abrir el menú hamburguesa

  const handleMenuLocation = () => {
    if (isMenuOpen) {
      toggleMenu(); // Cierra el carrito si está abierto al abrir el menú
    }
  };

  return (
    <>
      <LinkHamburguerContainerStyled
        initial={{ left: "100%" }}
        animate={{ left: isMenuOpen ? "0" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <MotionDivStyled whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
          <ItemHamburguerMenuStyled>
            <LinkHamburguerStyled to="/Home" onClick={handleMenuLocation}>
              Home
            </LinkHamburguerStyled>
          </ItemHamburguerMenuStyled>
        </MotionDivStyled>
        <MotionDivStyled whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
          <ItemHamburguerMenuStyled>
            <LinkHamburguerStyled to="/About" onClick={handleMenuLocation}>
              Sobre mí
            </LinkHamburguerStyled>
          </ItemHamburguerMenuStyled>
        </MotionDivStyled>
        <MotionDivStyled whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
          <ItemHamburguerMenuStyled>
            <LinkHamburguerStyled to="/Products" onClick={handleMenuLocation}>
              Productos
            </LinkHamburguerStyled>
          </ItemHamburguerMenuStyled>
        </MotionDivStyled>
        <MotionDivStyled whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
          <ItemHamburguerMenuStyled>
            <LinkHamburguerStyled to="/Contact" onClick={handleMenuLocation}>
              Contacto
            </LinkHamburguerStyled>
          </ItemHamburguerMenuStyled>
        </MotionDivStyled>
      </LinkHamburguerContainerStyled>
    </>
  );
};
