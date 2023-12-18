import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ContainerProductsStyled,
  ProductsStyled,
  ProductStyled,
  InfoProductStyled,
  ButtonProductStyled,
} from "./FeaturedProductsStyles";

// Productos destacados que se encuentran en la sección HOME

const FeaturedProducts = () => {
  return (
    <>
      <ContainerProductsStyled>
        <h3>Productos destacados</h3>
        <ProductsStyled>
          <ProductStyled>
            <img
              src="https://i0.wp.com/www.htn.com.ar/wp-content/uploads/2020/06/htn-pro-xt-gold.png?fit=1024%2C1280&ssl=1"
              alt="HTN-pro-xt-gold"
            />
            <InfoProductStyled>
              <h5>$5000</h5>
              <h4>XT Gold Protein</h4>
            </InfoProductStyled>
          </ProductStyled>
          <ProductStyled>
            <img
              src="https://www.htn.com.ar/wp-content/uploads/2020/08/htn-xplode-creatina.png"
              alt="HTN-creatina"
            />
            <InfoProductStyled>
              <h5>$13000</h5>
              <h4>Creatina Monohidrato</h4>
            </InfoProductStyled>
          </ProductStyled>
          <ProductStyled>
            <img
              src="https://www.htn.com.ar/wp-content/uploads/2020/08/htn-xplode-bcaa-pack-micronized.png"
              alt="HTN-bcaa"
            />
            <InfoProductStyled>
              <h5>$4000</h5>
              <h4>BCAA pack</h4>
            </InfoProductStyled>
          </ProductStyled>
        </ProductsStyled>
        <Link to="/products">
          <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1 }}>
            <ButtonProductStyled>Ver todos los productos</ButtonProductStyled>
          </motion.div>
        </Link>
      </ContainerProductsStyled>
    </>
  );
};

export default FeaturedProducts;
