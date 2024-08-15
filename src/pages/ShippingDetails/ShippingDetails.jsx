import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import useRedirect from "../../Redirect/useRedirect";
import { useLocation } from "react-router-dom";
import { loginUser } from "../../axios/axios-user";
import { createOrder } from "../../axios/axios-user";
import { setCurrentUser } from "../../redux/user/userSlice";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { finishPurchase } from "../../redux/shop/shopSlice";
import {
  ShippingDetailsContainerStyled,
  ShippingDetailsStyled,
  ShippingDetailsGroupStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  ErrorStyled,
  PurchaseDataContainerStyled,
  PurchaseDataStyled,
  ContainerProductsStyled,
} from "./ShippingDetailsStyles";

const ShippingDetails = () => {
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const shopItems = useSelector((state) => state.shop.shopItems);
  const location = useLocation();
  const items = location.state?.items || [];
  const currentUser = useSelector((state) => state.user.currentUser);
  //console.log(items);

  // Validación de los campos con Yup:
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("* Campo obligatorio"),
    cellphone: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "* Debe ser un número de celular válido (10 dígitos)"
      )
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
      const purchaseData = {
        items,
        price: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        shippingCost: 1000,
        total:
          items.reduce((acc, item) => acc + item.price * item.quantity, 0) +
          1000,
        shippingDetails: {
          name: values.name,
          cellphone: values.cellphone,
          location: values.location,
          address: values.address,
        },
      };

      try {
        const response = await fetch("http://127.0.0.1:8080/orders/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-token": currentUser.token,
          },
          body: JSON.stringify(purchaseData),
        });
        if (response.ok) {
          dispatch(finishPurchase(purchaseData));
          const data = await response.json();
          navigate("/Success", {
            state: {
              items,
              shippingDetails: purchaseData.shippingDetails,
              shippingCost: purchaseData.shippingCost,
              total: purchaseData.total,
            },
          });
        } else {
          const errorData = await response.json();
          console.error("Error al completar la compra:", errorData);
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
          <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1 }}>
            <ButtonStyled type="submit">Confirmar compra</ButtonStyled>
          </motion.div>
        </ShippingDetailsStyled>
      </ShippingDetailsContainerStyled>
      <PurchaseDataContainerStyled>
        <h3>Datos de compra</h3>
        <ContainerProductsStyled>
          {items.length > 0 ? (
            items.map((item) => (
              <div className="productContainer" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="infoContainer">
                  <h5>{item.title}</h5>
                  <p>${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
        </ContainerProductsStyled>
      </PurchaseDataContainerStyled>
      <Footer />
    </>
  );
};

export default ShippingDetails;
