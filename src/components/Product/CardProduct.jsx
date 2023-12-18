import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToShop } from "../../redux/shop/shopSlice";
import { ModalBuy } from "../Modal/Modal";
import { motion } from "framer-motion";
import {
  ContainerProductStyled,
  ProductInfoStyled,
  ButtonStyled,
} from "../../pages/Products/ProductsStyles";

// Render de cada producto de la sección PRODUCTS:

const CardProduct = ({ id, title, img, info, price }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // Función para agregar productos al carrito:

  const handleAddToShop = () => {
    dispatch(addToShop({ id, title, price, img })); // Agrega el producto al carrito
    setShowModal(true); // Muestra el modal al añadir el producto al carrito
    console.log({ Product: id, title, price, img }); // Imprime en la consola los productos una vez que toco "Comprar"
    setTimeout(() => {
      setShowModal(false);
    }, 1000); // Tiempo que aparece el modal
  };

  return (
    <>
      <ContainerProductStyled>
        <img src={img} alt={title} />
        <ProductInfoStyled>
          <h3>{title}</h3>
          <h5>{info}</h5>
          <p>${price}</p>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonStyled onClick={handleAddToShop}>Comprar</ButtonStyled>
          </motion.div>
        </ProductInfoStyled>
        {showModal && <ModalBuy />}
      </ContainerProductStyled>
    </>
  );
};

export default CardProduct;
