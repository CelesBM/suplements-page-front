import React from "react";
import styled from "styled-components";

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 60px;
  padding: 20px 30px;

  @media (min-width: 500px) {
    gap: 50px;
    margin-top: 80px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 120px;
  }

  @media (min-width: 1020px) {
    padding: 20px 80px;
  }

  @media (min-width: 1285px) {
    padding: 20px 120px;
  }

  p {
    font-size: 15px;
    color: #efb810;
    text-align: center;
    line-height: 23px;
    text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 500px) {
    p {
      font-size: 17px;
    }
  }

  @media (min-width: 748px) {
    p {
      font-size: 20px;
    }
  }

  img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 768px) {
    img {
      width: 50%;
    }
  }
`;

const Header = () => {
  return (
    <StyledHero>
      <p>
        Soy Cristian Zambosco, atleta del fisicoculturismo y personal trainer
        con una trayectoria de más de 15 años. <br />
        Durante años, he estado comprometido con el desarrollo de mi cuerpo y la
        mejora de mi rendimiento. En mi viaje, he descubierto la importancia del
        entrenamiento adecuado y cómo los suplementos de calidad pueden marcar
        la diferencia en tus resultados. <br />
        Si querés una los mejores productos de suplementación de alta calidad,
        estás en el lugar indicado!
      </p>
      <img src="hero.jpg" alt="Hero" />
    </StyledHero>
  );
};

export default Header;
