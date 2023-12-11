import React from "react";
import { HeroContainerStyled } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainerStyled>
      <p>
        Soy <strong>Cristian Zambosco</strong>, atleta del{" "}
        <strong>fisicoculturismo</strong> y <strong>personal trainer</strong>{" "}
        con una trayectoria de más de 15 años. <br />
        Durante años, he estado comprometido con el desarrollo de mi cuerpo y la
        mejora de mi rendimiento. En mi viaje, he descubierto la importancia del
        <strong> entrenamiento adecuado</strong> y cómo los
        <strong> suplementos de calidad</strong> pueden marcar la diferencia en
        tus resultados. <br />
        Si querés una los mejores productos de suplementación de alta calidad,
        estás en el lugar indicado!
      </p>
      <img src="hero.jpg" alt="Hero" />
    </HeroContainerStyled>
  );
};

export default Hero;
