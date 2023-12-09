import React from "react";
import { useDispatch } from "react-redux";
import { addToShop } from "../../redux/shop/shopSlice";
import { motion } from "framer-motion";
import { ContainerProductStyled } from "../../pages/Products/ProductsStyles";
import { ProductInfoStyled } from "../../pages/Products/ProductsStyles";
import { ButtonStyled } from "../../pages/Products/ProductsStyles";

const CardProduct = ({ id, title, img, info, price, index }) => {
  const isWideImage = index === 0 || index === 1; // Para dar estilos distintos a las dos primeras img
  const dispatch = useDispatch();

  // Función para agregar productos al carrito:

  const handleAddToShop = () => {
    dispatch(addToShop({ id, title, price, img }));
    console.log(id, title, price, img); // Imprime en la consola los productos una vez que toco "Comprar"
  };

  return (
    <ContainerProductStyled className={isWideImage ? "wide-image" : ""}>
      <img src={img} alt={title} />
      <ProductInfoStyled>
        <h3>{title}</h3>
        <h5>{info}</h5>
        <p>${price}</p>
        <motion.div whileTap={{ scale: 1.1 }}>
          <ButtonStyled onClick={handleAddToShop}>Comprar</ButtonStyled>
        </motion.div>
      </ProductInfoStyled>
    </ContainerProductStyled>
  );
};

export default CardProduct;
