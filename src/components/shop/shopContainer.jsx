import React from "react";
import { useState, useEffect } from "react";
import {
  ShopContainerStyled,
  ShopProductsContainerStyled,
  ProductContainerStyled,
  ProductImageStyled,
  InfoStyled,
  IconStyled,
  ContainerButtonsStyled,
  TotalPriceStyled,
  ButtonStyled,
  SpanStyled,
} from "./shopContainerStyles";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addToShop,
  decrementQuantity,
  removeProduct,
  clearShop,
} from "../../redux/shop/shopSlice";
import {
  ModalRemoveOneProduct,
  ModalRemoveAllProducts,
  ModalSuccessBuy,
} from "../Modal/Modal";

const productsLS = JSON.parse(localStorage.getItem("products")) || [];

const ShopContainer = ({ isOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showProductRemovedModal, setShowProductRemovedModal] = useState(false); // Nuevo estado para el modal de producto eliminado
  const [removedProductTitle, setRemovedProductTitle] = useState(""); // Para almacenar el título del producto eliminado
  const shopItems = useSelector((state) => state.shop.shopItems);
  const dispatch = useDispatch();

  // Obtener datos del localStorage al cargar el componente
  useEffect(() => {
    const productsLS = JSON.parse(localStorage.getItem("products")) || [];
    // Actualizar el estado con los datos del localStorage
    // dispatch(actualizarEstadoConLocalStorage(productsLS));
  }, []);

  // Para incrementar la cantidad:
  const handleIncrement = (product) => {
    dispatch(addToShop(product));
  };

  // Para disminuir la cantidad:
  const handleDecrement = (product) => {
    dispatch(decrementQuantity(product));
  };

  // Para eliminar el producto del carrito:
  const handleRemove = (product) => {
    dispatch(removeProduct(product));
    setRemovedProductTitle(product.title); // Guardar el título del producto eliminado
    setShowProductRemovedModal(true); // Mostrar el modal al eliminar un producto

    setTimeout(() => {
      setShowProductRemovedModal(false);
    }, 1000);
  };

  // Para eliminar todos los productos del carrito:
  const handleClearShop = () => {
    dispatch(clearShop());
    setShowEmptyCartModal(true); // Mostrar el modal al vaciar el carrito

    // Cerrar el modal automáticamente después de 2 segundos
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

  const handleBuy = () => {
    // Generar un identificador único para esta compra (por ejemplo, usando un timestamp)
    const purchaseId = Date.now().toString(); // Timestamp como ID único
    const purchaseData = {
      id: purchaseId,
      items: shopItems, // Los productos de esta compra
    };

    // Obtener compras anteriores del localStorage o un array vacío
    const previousPurchases =
      JSON.parse(localStorage.getItem("purchases")) || [];

    // Agregar la nueva compra a las compras anteriores
    previousPurchases.push(purchaseData);

    // Guardar en el localStorage las compras anteriores junto con la nueva
    localStorage.setItem("purchases", JSON.stringify(previousPurchases));

    // Limpiar el carrito después de la compra
    dispatch(clearShop());

    // Mostrar el modal al realizar la compra
    setShowPurchaseModal(true);

    setTimeout(() => {
      setShowPurchaseModal(false);
    }, 1000);
  };

  // Función para actualizar el localStorage con los datos del carrito
  const actualizarLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(shopItems));
  };

  return (
    <ShopContainerStyled isOpen={isOpen}>
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
                  {" "}
                  <h4>{item.title}</h4>
                  <p>${item.price * item.quantity}</p>
                </SpanStyled>

                <ContainerButtonsStyled>
                  <button onClick={() => handleIncrement(item)}>+</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <IconStyled>
                    <MdDelete onClick={() => handleRemove(item)} />{" "}
                  </IconStyled>
                </ContainerButtonsStyled>
              </InfoStyled>
            </ProductContainerStyled>
          ))
        ) : (
          <p className="empty-shop">No hay elementos en el carrito</p>
        )}
      </ShopProductsContainerStyled>
      <TotalPriceStyled>
        {shopItems.length > 0 && <p>Total a pagar: ${handleTotalPrice()}</p>}{" "}
      </TotalPriceStyled>
      {showProductRemovedModal && <ModalRemoveOneProduct />}
      {shopItems.length > 0 && (
        <ButtonStyled onClick={handleClearShop}>Vaciar carrito </ButtonStyled>
      )}
      {shopItems.length > 0 && (
        <ButtonStyled onClick={handleBuy}>Comprar</ButtonStyled>
      )}

      {showEmptyCartModal && <ModalRemoveAllProducts />}
      {showPurchaseModal && <ModalSuccessBuy />}
    </ShopContainerStyled>
  );
};

export default ShopContainer;
