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
import { finishPurchase } from "../../redux/shop/shopSlice";
import {
  SuccessContainerStyled,
  ButtonStyled,
  LinkStyled,
  PurchaseDataContainerStyled,
  PurchaseDataStyled,
  ContainerProductsStyled,
  ShippingDataContainerStyled,
} from "./SuccessStyles";

const Success = () => {
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const shopItems = useSelector((state) => state.shop.shopItems);
  const location = useLocation();
  const items = location.state?.items || [];
  const shippingDetails = location.state?.shippingDetails || [];
  //const { items } = location.state || { items: [] }; //recupera los datos de los items
  const currentUser = useSelector((state) => state.user.currentUser);
  //useRedirect("/");

  const shippingCost = location.state?.shippingCost || 0;
  const total = location.state?.total || 0;

  console.log(items, shippingDetails, shippingCost, total);
  return (
    <>
      <Header />
      <SuccessContainerStyled>
        <h3>Compra realizada con éxito!</h3>
        <PurchaseDataContainerStyled>
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
        <ShippingDataContainerStyled>
          <h3>Detalles de Envío:</h3>
          <p>Nombre: {shippingDetails.name}</p>
          <p>Teléfono: {shippingDetails.cellphone}</p>
          <p>Localidad: {shippingDetails.location}</p>
          <p>Dirección: {shippingDetails.address}</p>
          <p>Precio de envío: ${shippingCost}</p>
          <p>Total: ${total}</p>
        </ShippingDataContainerStyled>
      </SuccessContainerStyled>
      <Footer />
    </>
  );
};

export default Success;
