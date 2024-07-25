import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  LoginContainerStyled,
  LoginStyled,
  LoginGroupStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  LinkStyled,
} from "./LoginStyles";

const Login = () => {
  return (
    <>
      <Header />
      <LoginContainerStyled>
        <h3>Iniciar Sesión</h3>
        <LoginStyled>
          <LoginGroupStyled>
            <LabelStyled htmlFor="email">Email:</LabelStyled>
            <InputStyled type="email" id="email" name="email" />
          </LoginGroupStyled>
          <LoginGroupStyled>
            <LabelStyled htmlFor="password">Contraseña:</LabelStyled>
            <InputStyled type="password" id="password" name="password" />
          </LoginGroupStyled>
          <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1 }}>
            <ButtonStyled type="submit">Ingresar</ButtonStyled>
          </motion.div>
        </LoginStyled>
        <LinkStyled to="/Register">
          <h4>No tienes cuenta? Resgístrate aquí</h4>
        </LinkStyled>
      </LoginContainerStyled>
      <Footer />
    </>
  );
};

export default Login;
