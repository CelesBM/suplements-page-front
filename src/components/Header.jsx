import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: rgb(177, 172, 67);
  background: linear-gradient(
    180deg,
    rgba(177, 172, 67, 1) 0%,
    rgba(138, 135, 74, 1) 4%,
    rgba(98, 97, 71, 1) 16%,
    rgba(70, 69, 53, 1) 22%,
    rgba(35, 35, 31, 1) 38%,
    rgba(35, 35, 31, 1) 44%,
    rgba(35, 35, 31, 1) 46%,
    rgba(36, 36, 30, 1) 50%,
    rgba(34, 34, 31, 1) 59%,
    rgba(25, 25, 23, 1) 77%,
    rgba(20, 20, 19, 1) 89%,
    rgba(20, 20, 19, 1) 89%,
    rgba(19, 19, 17, 1) 97%
  );
  width: 100%;
  height: 70px;
  text-align: center; /* Alineación del texto en el centro */
  padding: 8px 5px;
  //prueba para que quede fijo
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (min-width: 768px) {
    height: 100px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  @media (min-width: 400px) {
    nav {
      padding: 0px 20px;
    }
  }

  @media (min-width: 400px) {
    nav {
      padding: 0px 25px;
    }
  }

  @media (min-width: 768px) {
    nav {
      padding: 0px 50px;
    }
  }

  @media (min-width: 1020px) {
    nav {
      padding: 0px 70px;
    }
  }

  img {
    width: 70px;
    border-radius: 1rem;
  }

  @media (min-width: 500px) {
    img {
      width: 90px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 120px;
    }
  }

  ul {
    display: flex;
    gap: 10px;
  }

  @media (min-width: 400px) {
    ul {
      gap: 22px;
    }
  }

  @media (min-width: 1020px) {
    ul {
      gap: 90px;
    }
  }

  /* Estilos para enlaces en el encabezado */
  a {
    font-size: 14px;
    color: #efb810; /* Color del enlace */
    text-decoration: none; /* Eliminar subrayado de enlaces */
    margin: 0; /* Margen horizontal entre enlaces */
  }

  @media (min-width: 400px) {
    a {
      font-size: 16px;
    }
  }

  @media (min-width: 1020px) {
    a {
      font-size: 18px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <img src="logo.jpeg" alt="Logo" />
        <ul>
          <a href="/">Inicio</a>

          <a href="/acerca">Productos</a>

          <a href="/contacto">Contacto</a>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
