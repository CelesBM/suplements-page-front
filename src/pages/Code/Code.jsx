import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  CodeContainerStyled,
  CodeStyled,
  CodeGroupStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from "./CodeStyles";

const Code = () => {
  return (
    <>
      <Header />
      <CodeContainerStyled>
        <h3>Verificación de usuario</h3>
        <CodeStyled>
          <CodeGroupStyled>
            <LabelStyled htmlFor="code">
              Ingrese el código que se le ha enviado por correo electrónico:
            </LabelStyled>
            <InputStyled type="text" id="code" name="code" />
          </CodeGroupStyled>
          <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1 }}>
            <ButtonStyled type="submit">Verificar usuario</ButtonStyled>
          </motion.div>
        </CodeStyled>
      </CodeContainerStyled>
      <Footer />
    </>
  );
};

export default Code;
