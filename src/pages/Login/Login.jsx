import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import useRedirect from "../../Redirect/useRedirect";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { loginUser } from "../../axios/axios-user";
import { setCurrentUser } from "../../redux/user/UserSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(""); // Nuevo estado para manejar el error
  useRedirect("/");

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
  // Uso formik:
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const user = await loginUser(values.email, values.password);
        console.log(user);
        console.log(user.user.verified);
        if (user) {
          if (!user.user.verified) {
            // Si el usuario no está verificado
            setError("Usuario no verificado. Por favor verifica tu correo.");
            navigate("/Verify", { state: { user: user.user } });
          } else {
            // Si el usuario está verificado
            dispatch(
              setCurrentUser({
                ...user,
                token: user.token,
              })
            );
            navigate("/"); // Redirige a la página principal o a donde desees
          }
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        if (error.response && error.response.data && error.response.data.msg) {
          setError(error.response.data.msg);
        } else {
          setError("Error desconocido");
        }
      }
    },
  });
  return (
    <>
      <Header />
      <LoginContainerStyled>
        <h3>Iniciar Sesión</h3>
        <LoginStyled onSubmit={formik.handleSubmit}>
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
          {error && (
            <div>
              <ErrorStyled>{error}</ErrorStyled>
              {error ===
                "Usuario no verificado. Por favor verifica tu correo." && (
                <ButtonStyled onClick={() => navigate("/Verify")}>
                  Verificar mi cuenta
                </ButtonStyled>
              )}
            </div>
          )}
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
