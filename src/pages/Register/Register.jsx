import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
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
  ErrorStyled,
} from "./RegisterStyles";

const Register = () => {
  // Validación de los campos con Yup:
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("* Campo obligatorio"),
    email: Yup.string()
      .email("* Correo electrónico inválido")
      .required("* Campo obligatorio"),
    password: Yup.string()
      .max(6, "* No puede utilizar más de 6 caracteres")
      .required("* Campo obligatorio"),
  });

  // Valores iniciales:
  const initialValues = {
    name: "",
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
      <RegisterContainerStyled>
        <h3>Crear usuario</h3>
        <RegisterStyled>
          <RegisterGroupStyled>
            <LabelStyled htmlFor="name">Nombre:</LabelStyled>
            <InputStyled
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <ErrorStyled>{formik.errors.name}</ErrorStyled>
            ) : null}
          </RegisterGroupStyled>
          <RegisterGroupStyled>
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
          </RegisterGroupStyled>
          <RegisterGroupStyled>
            <LabelStyled htmlFor="name">Contraseña:</LabelStyled>
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
