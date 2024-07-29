import React, { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyUser } from "../../axios/axios-user";
import { setVerified } from "../../redux/user/UserSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  // Validación de los campos con Yup:
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("* Correo electrónico inválido")
      .required("* Campo obligatorio"),
    code: Yup.string()
      .min(8, "Mínimo de caracteres: 8")
      .max(8, "Máximo de caracteres: 8")
      .required("* Campo Requerido"),
  });

  // Valores iniciales:
  const initialValues = {
    email: "",
    code: "",
  };

  // Uso formik:
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (!currentUser || !values.code) {
        console.log("Datos inválidos:", currentUser, values.code);
        return;
      }
      const user = await verifyUser(currentUser.email, values.code);
      console.log("Funciona, user:", user);
      dispatch(setVerified());
      navigate("/");
    },
  });

  useEffect(() => {
    if (!currentUser) {
      console.log("¡No hay usuario actual!");
      navigate("/login"); // Redirige al login si no hay usuario
    } else if (currentUser.verified) {
      console.log("Usuario ya verificado");
      navigate("/"); // Redirige a la página principal si el usuario ya está verificado
    }
  }, [currentUser, navigate]);

  return (
    <>
      <Header />
      <CodeContainerStyled>
        <h3>Verificación de usuario</h3>
        <CodeStyled onSubmit={formik.handleSubmit}>
          <CodeGroupStyled>
            <LabelStyled htmlFor="email">Email:</LabelStyled>
            <InputStyled
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <LabelStyled htmlFor="code">
              Ingrese el código que se le ha enviado por correo electrónico:
            </LabelStyled>
            <InputStyled
              type="text"
              id="code"
              name="code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.code}
            />
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
