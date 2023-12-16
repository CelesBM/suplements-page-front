import React from "react";
import { Link } from "react-router-dom";
import { NotFoundContainerStyled } from "./NotFoundStyles";
import { ButtonStyled } from "../Contact/ContactStyles";

function NotFound() {
  return (
    <>
      <NotFoundContainerStyled>
        <h1>Ups! Página no encontrada</h1>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/712/957/desktop-wallpaper-mike-wazowski-surprised-full-id-1485.jpg"
          alt="Notfound"
        />
        <Link to="/Home">
          <ButtonStyled>Volver a la pagina principal</ButtonStyled>
        </Link>
      </NotFoundContainerStyled>
    </>
  );
}

export default NotFound;
