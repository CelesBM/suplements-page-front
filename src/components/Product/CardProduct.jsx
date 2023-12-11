import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToShop } from "../../redux/shop/shopSlice";
import { motion } from "framer-motion";
import { ContainerProductStyled } from "../../pages/Products/ProductsStyles";
import { ProductInfoStyled } from "../../pages/Products/ProductsStyles";
import { ButtonStyled } from "../../pages/Products/ProductsStyles";
import { ModalBuy } from "../Modal/Modal";

const CardProduct = ({ id, title, img, info, price, index }) => {
  //const isWideImage = index === 0 || index === 1;
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // Función para agregar productos al carrito:

  const handleAddToShop = () => {
    dispatch(addToShop({ id, title, price, img }));
    setShowModal(true); // Mostrar el modal al añadir el producto al carrito
    console.log(id, title, price, img); // Imprime en la consola los productos una vez que toco "Comprar"
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  //<ContainerProductStyled>{"className={isWideImage ? `wide-image` : ``}"}

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
