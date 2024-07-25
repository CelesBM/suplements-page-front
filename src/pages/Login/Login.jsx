import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
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
  ErrorStyled,
} from "./LoginStyles";

const Login = () => {
  // Validación de los campos con Yup:
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("* Correo electrónico inválido")
      .required("* Campo obligatorio"),
    password: Yup.string()
      .max(6, "* No puede utilizar más de 6 caracteres")
      .required("* Campo obligatorio"),
  });

  // Valores iniciales:
  const initialValues = {
    email: "",
    password: "",
  };

  // Uso formik:
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  return (
    <>
      <Header />
      <LoginContainerStyled>
        <h3>Iniciar Sesión</h3>
        <LoginStyled>
          <LoginGroupStyled>
            <LabelStyled htmlFor="email">Email:</LabelStyled>
            <InputStyled
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorStyled>{formik.errors.email}</ErrorStyled>
            ) : null}
          </LoginGroupStyled>
          <LoginGroupStyled>
            <LabelStyled htmlFor="password">Contraseña:</LabelStyled>
            <InputStyled
              type="text"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorStyled>{formik.errors.password}</ErrorStyled>
            ) : null}
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
