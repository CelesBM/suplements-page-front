import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  RegisterContainerStyled,
  RegisterStyled,
  RegisterGroupStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from "./RegisterStyles";

const Register = () => {
  return (
    <>
      <Header />
      <RegisterContainerStyled>
        <h3>Crear usuario</h3>
        <RegisterStyled>
          <RegisterGroupStyled>
            <LabelStyled htmlFor="name">Nombre:</LabelStyled>
            <InputStyled type="name" id="name" name="name" />
          </RegisterGroupStyled>
          <RegisterGroupStyled>
            <LabelStyled htmlFor="email">Email:</LabelStyled>
            <InputStyled type="email" id="email" name="email" />
          </RegisterGroupStyled>
          <RegisterGroupStyled>
            <LabelStyled htmlFor="name">Contraseña:</LabelStyled>
            <InputStyled type="password" id="password" name="password" />
          </RegisterGroupStyled>
          <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1 }}>
            <ButtonStyled type="submit">Registrarse</ButtonStyled>
          </motion.div>
        </RegisterStyled>
      </RegisterContainerStyled>
      <Footer />
    </>
  );
};

export default Register;
