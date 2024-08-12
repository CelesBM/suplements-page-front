import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../axios/axios-user";
import { setCurrentUser } from "../../redux/user/UserSlice";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { finishPurchase } from "../../redux/shop/shopSlice";
import { useEffect } from "react";
import { getOrders } from "../../axios/axios-user";
import {
  PurchasesContainerStyled,
  ContainerProductsStyled,
} from "./PurchasesStyles";

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = currentUser.token;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders(token);
        setPurchases(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las compras:", error);
        setLoading(false);
      }
    };

    if (token) {
      fetchOrders();
    } else {
      console.log("no hay token");
      navigate("/login"); //Redirigir al login si no hay token
    }
  }, [token, navigate]);

  return (
    <>
      <Header />
      <PurchasesContainerStyled>
        <h3>Mis Compras</h3>
        {loading ? (
          <p>Cargando...</p>
        ) : purchases.length > 0 ? (
          purchases.map((purchase, index) => (
            <ContainerProductsStyled key={index}>
              <h4>Compra #{index + 1}</h4>
              <div className="product">
                <p>Precio total: ${purchase.total}</p>
                <p>Productos:</p>
                <ul>
                  {purchase.items.map((item, idx) => (
                    <li key={idx}>
                      {item.title} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </ContainerProductsStyled>
          ))
        ) : (
          <p>No tienes compras realizadas.</p>
        )}
      </PurchasesContainerStyled>
      <Footer />
    </>
  );
};

export default Purchases;
