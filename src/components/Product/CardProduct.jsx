import React from "react";
import { motion } from "framer-motion";
import { ContainerProductStyled } from "../../pages/Products/ProductsStyles";
import { ProductInfoStyled } from "../../pages/Products/ProductsStyles";
import { ButtonStyled } from "../../pages/Products/ProductsStyles";

const CardProduct = ({ title, img, info, price, index }) => {
  const isWideImage = index === 0 || index === 1;

  return (
    <ContainerProductStyled className={isWideImage ? "wide-image" : ""}>
      <img src={img} alt={title} />
      <ProductInfoStyled>
        <h3>{title}</h3>
        <h5>{info}</h5>
        <p>${price}</p>
        <motion.div whileTap={{ scale: 1.1 }}>
          <ButtonStyled onClick={(e) => e.preventDefault()}>
            Comprar
          </ButtonStyled>
        </motion.div>
      </ProductInfoStyled>
    </ContainerProductStyled>
  );
};

export default CardProduct;
