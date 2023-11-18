import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FormContainerStyled } from "./ContactStyles";
import { FormStyled } from "./ContactStyles";
import { FormGroupStyled } from "./ContactStyles";
import { LabelStyled } from "./ContactStyles";
import { InputStyled } from "./ContactStyles";
import { TextAreaStyled } from "./ContactStyles";
import { ButtonStyled } from "./ContactStyles";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <>
      <Header />
      <FormContainerStyled>
        <h3>Contacto</h3>
        <FormStyled onSubmit={handleSubmit}>
          <FormGroupStyled>
            <LabelStyled htmlFor="nombre">Nombre:</LabelStyled>
            <InputStyled type="text" id="nombre" name="nombre" required />
          </FormGroupStyled>
          <FormGroupStyled>
            <LabelStyled htmlFor="apellido">Apellido:</LabelStyled>
            <InputStyled type="text" id="apellido" name="apellido" required />
          </FormGroupStyled>
          <FormGroupStyled>
            <LabelStyled htmlFor="email">Email:</LabelStyled>
            <InputStyled type="email" id="email" name="email" required />
          </FormGroupStyled>
          <FormGroupStyled>
            <LabelStyled htmlFor="asunto">Asunto:</LabelStyled>
            <TextAreaStyled id="asunto" name="asunto" rows="4" required />
          </FormGroupStyled>
          <motion.div whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
            <ButtonStyled type="submit">Enviar</ButtonStyled>
          </motion.div>
        </FormStyled>
      </FormContainerStyled>
      <Footer />
    </>
  );
};

export default Contact;
