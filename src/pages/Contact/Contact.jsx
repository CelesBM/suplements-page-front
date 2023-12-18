import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ModalContact } from "../../components/Modal/Modal";
import {
  FormContainerStyled,
  FormStyled,
  FormGroupStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ButtonStyled,
  ErrorStyled,
} from "./ContactStyles";

const Contact = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  // Validación de los campos con Yup:
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("* Campo obligatorio"),
    lastname: Yup.string().trim().required("* Campo obligatorio"),
    email: Yup.string()
      .email("* Correo electrónico inválido")
      .required("* Campo obligatorio"),
    issue: Yup.string()
      .max(200, "* No puede utilizar más de 200 caracteres")
      .required("* Campo obligatorio"),
  });

  // Valores iniciales:
  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    issue: "",
  };

  // Modal al enviar el mensaje:
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    setShowContactModal(true);
    setTimeout(() => {
      setShowContactModal(false);
    }, 2000);
    resetForm();
  };

  // Uso formik:
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Header />
      <FormContainerStyled>
        <h3>Contacto</h3>
        <FormStyled onSubmit={formik.handleSubmit}>
          <FormGroupStyled>
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
          </FormGroupStyled>
          <FormGroupStyled>
            <LabelStyled htmlFor="lastname">Apellido:</LabelStyled>
            <InputStyled
              type="text"
              id="lastname"
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <ErrorStyled>{formik.errors.lastname}</ErrorStyled>
            ) : null}
          </FormGroupStyled>
          <FormGroupStyled>
            <LabelStyled htmlFor="email">Email:</LabelStyled>
            <InputStyled
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorStyled>{formik.errors.email}</ErrorStyled>
            ) : null}
          </FormGroupStyled>
          <FormGroupStyled>
            <LabelStyled htmlFor="issue">Asunto:</LabelStyled>
            <TextAreaStyled
              type="textarea"
              id="issue"
              name="issue"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.issue}
            />
            {formik.touched.issue && formik.errors.issue ? (
              <ErrorStyled>{formik.errors.issue}</ErrorStyled>
            ) : null}
          </FormGroupStyled>
          <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1 }}>
            <ButtonStyled type="submit">Enviar</ButtonStyled>
          </motion.div>
        </FormStyled>
        {showContactModal && <ModalContact />}
      </FormContainerStyled>
      <Footer />
    </>
  );
};

export default Contact;
