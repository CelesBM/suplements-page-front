import React from "react";
import Header from "../../components/Header/Header";
import { AboutContainerStyled } from "./AboutStyles";
import { ImageContainerStyled } from "./AboutStyles";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <AboutContainerStyled>
        <p>
          Hola a todos! Como les comenté brevemente en la sección principal, mi
          nombre es <strong>Cristian Zambosco</strong>, entreno desde los 17
          años musculación y, a partir de los 25 años, me incursioné en el
          apasionante mundo del fisicoculturismo. <br />A su vez, me formé para
          ser <strong>personal trainer</strong>, profesión que ejerzo tanto a
          distancia como presencialmente. Trabajo hace más de 15 años en el
          gimnasio Zona Fitness, ubicado en Quilmes centro. <br />
          Por otro lado, también me dedico a la venta de suplementos deportivos
          de calidad, para lograr la mejor versión de cada persona, manteniendo
          como base el correspondiente ejercicio físico y la adecudada
          alimentación. <br />
          En esta página no sólo vas a poder adquirir los productos que
          necesites, sino que también vas a poder contar con mi asesoramiento.
          <br />
          Qué estás esperando? No te dejes para después.
        </p>
        <ImageContainerStyled>
          <img src="about.jpeg" alt="About1" />
          <img src="about2.jpeg" alt="About2" />
          <img src="about3.jpeg" alt="About3" />
        </ImageContainerStyled>
      </AboutContainerStyled>
      <Footer />
    </>
  );
};

export default About;
