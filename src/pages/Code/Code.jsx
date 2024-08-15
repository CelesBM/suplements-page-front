import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyUser } from "../../axios/axios-user";
import { setVerified } from "../../redux/user/userSlice";
import { ModalVerification } from "../../components/Modal/Modal";
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
  ErrorStyled,
} from "./CodeStyles";

const Code = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [error, setError] = useState(""); // Para manejar mensajes de error
  const [showVerifiedModal, setShowVerifiedModal] = useState(false); // Para manejar el modal

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
    email: user?.email || "",
    code: "",
  };

  // Uso formik:
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (!values.code) {
        console.log("Código de verificación no proporcionado");
        return;
      }
      try {
        const result = await verifyUser(values.email, values.code);
        dispatch(setVerified());
        setShowVerifiedModal(true); // Mostrar el modal
        setTimeout(() => {
          setShowVerifiedModal(false);
          navigate("/Login");
        }, 1000); // Tiempo que aparece el modal
      } catch (error) {
        console.error("Error en la verificación:", error);
        setError("Error en la verificación. Inténtalo de nuevo.");
      }
    },
  });

  useEffect(() => {
    if (!currentUser && !user) {
      console.log("No hay usuario actual");
      navigate("/login"); //Redirige al login si no hay usuario
    } else if (currentUser && currentUser.verified) {
      navigate("/"); //Redirige a la página principal si el usuario ya está verificado
    }
  }, [currentUser, user, navigate]);

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
            {error && <ErrorStyled>{error}</ErrorStyled>}{" "}
            {/* Mostrar mensaje de error */}
          </CodeGroupStyled>
          <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1 }}>
            <ButtonStyled type="submit">Verificar usuario</ButtonStyled>
          </motion.div>
        </CodeStyled>
      </CodeContainerStyled>
      {showVerifiedModal && <ModalVerification />}{" "}
      {/* Mostrar el modal si `showModal` es true */}
      <Footer />
    </>
  );
};

export default Code;
