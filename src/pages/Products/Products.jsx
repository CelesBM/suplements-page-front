import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ContainerSectionProductsStyled } from "./ProductsStyles";
import { ContainerProductsStyled } from "./ProductsStyles";
import { ContainerProductStyled } from "./ProductsStyles";
import { ProductInfoStyled } from "./ProductsStyles";
import { ButtonStyled } from "./ProductsStyles";

const Products = () => {
  return (
    <>
      <Header />
      <ContainerSectionProductsStyled>
        <h3>Productos</h3>
        <ContainerProductsStyled>
          <ContainerProductStyled>
            <img
              src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
              alt=""
            />
            <ProductInfoStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
              <motion.div whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
                <ButtonStyled>Comprar</ButtonStyled>
              </motion.div>
            </ProductInfoStyled>
          </ContainerProductStyled>
          <ContainerProductStyled>
            <img
              src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
              alt=""
            />
            <ProductInfoStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
              <motion.div whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
                <ButtonStyled>Comprar</ButtonStyled>
              </motion.div>
            </ProductInfoStyled>
          </ContainerProductStyled>
          <ContainerProductStyled>
            <img
              src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
              alt=""
            />
            <ProductInfoStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
              <motion.div whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
                <ButtonStyled>Comprar</ButtonStyled>
              </motion.div>
            </ProductInfoStyled>
          </ContainerProductStyled>
          <ContainerProductStyled>
            <img
              src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
              alt=""
            />
            <ProductInfoStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
              <motion.div whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
                <ButtonStyled>Comprar</ButtonStyled>
              </motion.div>
            </ProductInfoStyled>
          </ContainerProductStyled>
          <ContainerProductStyled>
            <img
              src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
              alt=""
            />
            <ProductInfoStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
              <motion.div whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
                <ButtonStyled>Comprar</ButtonStyled>
              </motion.div>
            </ProductInfoStyled>
          </ContainerProductStyled>
          <ContainerProductStyled>
            <img
              src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
              alt=""
            />
            <ProductInfoStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
              <motion.div whileTap={{ scale: 1.3 }} whileHover={{ scale: 1.1 }}>
                <ButtonStyled>Comprar</ButtonStyled>
              </motion.div>
            </ProductInfoStyled>
          </ContainerProductStyled>
        </ContainerProductsStyled>
      </ContainerSectionProductsStyled>
      <Footer />
    </>
  );
};

export default Products;
