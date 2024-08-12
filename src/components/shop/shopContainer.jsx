import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppShopContext } from "../../Context/ContextShop";
import { useNavigate } from "react-router-dom";
import {
  addToShop,
  decrementQuantity,
  removeProduct,
  clearShop,
} from "../../redux/shop/shopSlice";
import { ModalRemoveOneProduct, ModalRemoveAllProducts } from "../Modal/Modal";
import {
  ShopContainerStyled,
  ShopProductsContainerStyled,
  ProductContainerStyled,
  ProductImageStyled,
  InfoStyled,
  IconStyled,
  ContainerButtonsStyled,
  ShopTotalInfoStyled,
  TotalPriceStyled,
  ButtonStyled,
  SpanStyled,
} from "./shopContainerStyles";
import { MdDelete } from "react-icons/md";

// Carrito de compras:

const ShopContainer = ({ isOpen }) => {
  const navigate = useNavigate();
  const { isShopOpen, toggleShop } = useAppShopContext();
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);
  const [showProductRemovedModal, setShowProductRemovedModal] = useState(false);
  const shopItems = useSelector((state) => state.shop.shopItems);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  // Para incrementar la cantidad:
  const handleIncrement = (product) => {
    dispatch(addToShop(product));
  };

  // Para disminuir la cantidad:
  const handleDecrement = (product) => {
    if (product.quantity === 1) {
      handleRemove(product);
      return;
    }
    dispatch(decrementQuantity(product));
  };

  // Para eliminar el producto del carrito:
  const handleRemove = (product) => {
    dispatch(removeProduct(product));
    setShowProductRemovedModal(true); // Mostrar el modal al eliminar un producto
    setTimeout(() => {
      setShowProductRemovedModal(false);
    }, 1000);
  };

  // Para eliminar todos los productos del carrito:
  const handleClearShop = () => {
    dispatch(clearShop());
    setShowEmptyCartModal(true); // Mostrar el modal al vaciar el carrito
    setTimeout(() => {
      setShowEmptyCartModal(false);
    }, 1000);
  };

  // Para calcular el precio total del carrito
  const handleTotalPrice = () => {
    let totalPrice = 0;
    shopItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  // Para comenzar la compra e ir a ShippingDetails:
  const handleBuy = () => {
    navigate("/ShippingDetails", { state: { items: shopItems } }); //Guarda los datos del carrito y redirige al usuario a la página de detalles de envío
  };

  return (
    <ShopContainerStyled
      isOpen={isOpen}
      initial={{ left: "100%" }}
      animate={{ left: isShopOpen ? "20%" : "50%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h3>Carrito de Compras</h3>
      <ShopProductsContainerStyled>
        {shopItems.length > 0 ? (
          shopItems.map((item) => (
            <ProductContainerStyled key={item.id}>
              <ProductImageStyled
                src={item.img}
                alt={item.title}
                small={item.small}
              />
              <InfoStyled>
                <SpanStyled>
                  <h4>{item.title}</h4>
                  <p>${item.price * item.quantity}</p>
                </SpanStyled>
                <ContainerButtonsStyled>
                  <button onClick={() => handleIncrement(item)}>+</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <IconStyled>
                    <MdDelete onClick={() => handleRemove(item)} />
                  </IconStyled>
                </ContainerButtonsStyled>
              </InfoStyled>
            </ProductContainerStyled>
          ))
        ) : (
          <p className="empty-shop">No hay elementos en el carrito</p>
        )}
      </ShopProductsContainerStyled>
      <ShopTotalInfoStyled>
        <TotalPriceStyled>
          {shopItems.length > 0 && <p>Total a pagar: ${handleTotalPrice()}</p>}{" "}
        </TotalPriceStyled>
        {showProductRemovedModal && <ModalRemoveOneProduct />}
        {shopItems.length > 0 && (
          <ButtonStyled onClick={handleClearShop}>Vaciar carrito </ButtonStyled>
        )}
        {shopItems.length > 0 && (
          <ButtonStyled onClick={handleBuy}>Comenzar compra</ButtonStyled>
        )}
        {showEmptyCartModal && <ModalRemoveAllProducts />}
        {/* Mostrar botón "Mis Compras" solo si hay un usuario logueado */}
        {currentUser && (
          <ButtonStyled onClick={() => navigate("/Purchases")}>
            Mis Compras
          </ButtonStyled>
        )}
      </ShopTotalInfoStyled>
    </ShopContainerStyled>
  );
};

export default ShopContainer;
