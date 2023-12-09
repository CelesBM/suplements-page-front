import React from "react";
import {
  LinkHamburguerContainerStyled,
  ItemHamburguerMenuStyled,
  LinkHamburguerStyled,
  MotionDivStyled,
} from "../Header/HeaderStyles";

// Menú desplegable del menú hamburguesa:

export const HamburguerMenu = () => {
  return (
    <>
      <LinkHamburguerContainerStyled>
        <MotionDivStyled whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
          <ItemHamburguerMenuStyled>
            <LinkHamburguerStyled to="/Home">Home</LinkHamburguerStyled>
          </ItemHamburguerMenuStyled>
        </MotionDivStyled>
        <MotionDivStyled whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
          <ItemHamburguerMenuStyled>
            <LinkHamburguerStyled to="/About">Sobre mí</LinkHamburguerStyled>
          </ItemHamburguerMenuStyled>
        </MotionDivStyled>
        <MotionDivStyled whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
          <ItemHamburguerMenuStyled>
            <LinkHamburguerStyled to="/Products">
              Productos
            </LinkHamburguerStyled>
          </ItemHamburguerMenuStyled>
        </MotionDivStyled>
        <MotionDivStyled whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
          <ItemHamburguerMenuStyled>
            <LinkHamburguerStyled to="/Contact">Contacto</LinkHamburguerStyled>
          </ItemHamburguerMenuStyled>
        </MotionDivStyled>
      </LinkHamburguerContainerStyled>
    </>
  );
};
