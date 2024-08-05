import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import useRedirect from "../../Redirect/useRedirect";
import { useLocation } from "react-router-dom";
import { loginUser } from "../../axios/axios-user";
import { createOrder } from "../../axios/axios-user";
import { setCurrentUser } from "../../redux/user/UserSlice";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  ShippingDetailsContainerStyled,
  ShippingDetailsStyled,
  ShippingDetailsGroupStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  LinkStyled,
  ErrorStyled,
  PurchaseDataContainerStyled,
  PurchaseDataStyled,
} from "./ShippingDetailsStyles";

const ShippingDetails = () => {
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const shopItems = useSelector((state) => state.shop.shopItems);

  //useRedirect("/");

  // Validación de los campos con Yup:
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("* Campo obligatorio"),
    cellphone: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "* Debe ser un número de celular válido (10 dígitos)"
      ) // Ajusta el patrón según el formato deseado
      .required("* Campo obligatorio"),
    location: Yup.string().trim().required("* Campo obligatorio"),
    address: Yup.string().trim().required("* Campo obligatorio"),
  });

  // Valores iniciales:
  const initialValues = {
    name: "",
    cellphone: "",
    location: "",
    address: "",
  };

  // Uso formik:
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Completa los detalles de envío y realiza la solicitud
        const response = await createOrder({
          orderId,
          items: shopItems,
          price: formik.values.totalPrice, // Usa el totalPrice calculado
          shippingCost: 1000,
          total: formik.values.totalPrice,
          shippingDetails: {
            name: values.name,
            cellphone: values.cellphone,
            location: values.location,
            address: values.address,
          },
        });

        if (response.ok) {
          dispatch(clearShop()); // Limpiar el carrito después de la compra
          console.log("funciono el shipping");
          //navigate("/success"); // Redirige a una página de éxito si es necesario
        } else {
          console.error("Error al completar la compra");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <>
      <Header />
      <ShippingDetailsContainerStyled>
        <h3>Datos de envío</h3>
        <ShippingDetailsStyled onSubmit={formik.handleSubmit}>
          <ShippingDetailsGroupStyled>
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
          </ShippingDetailsGroupStyled>
          <ShippingDetailsGroupStyled>
            <LabelStyled htmlFor="cellphone">Teléfono:</LabelStyled>
            <InputStyled
              type="text"
              id="cellphone"
              name="cellphone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cellphone}
            />
            {formik.touched.cellphone && formik.errors.cellphone ? (
              <ErrorStyled>{formik.errors.cellphone}</ErrorStyled>
            ) : null}
          </ShippingDetailsGroupStyled>
          <ShippingDetailsGroupStyled>
            <LabelStyled htmlFor="location">Localidad:</LabelStyled>
            <InputStyled
              type="text"
              id="location"
              name="location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location ? (
              <ErrorStyled>{formik.errors.location}</ErrorStyled>
            ) : null}
          </ShippingDetailsGroupStyled>
          <ShippingDetailsGroupStyled>
            <LabelStyled htmlFor="address">Domicilio:</LabelStyled>
            <InputStyled
              type="text"
              id="address"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <ErrorStyled>{formik.errors.address}</ErrorStyled>
            ) : null}
          </ShippingDetailsGroupStyled>
        </ShippingDetailsStyled>
      </ShippingDetailsContainerStyled>
      <PurchaseDataContainerStyled>
        <h3>Datos de compra</h3>

        <PurchaseDataStyled>
          Acá tiene que traer el carrito de compras
        </PurchaseDataStyled>
        <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1 }}>
          <ButtonStyled type="submit">Confirmar compra</ButtonStyled>
        </motion.div>
      </PurchaseDataContainerStyled>
      <Footer />
    </>
  );
};

export default ShippingDetails;
