import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  filterProductsByCategory,
} from "../../components/Product/productActions";
import { products as data } from "../../data/productsData";
import CardProduct from "../../components/Product/CardProduct";
import { motion } from "framer-motion";
import { ContainerProductsStyled } from "./ProductsStyles";
import { ContainerSectionProductsStyled } from "./ProductsStyles";
import { ContainerCategoriesStyled } from "./ProductsStyles";
import { ButtonCategoriesStyled } from "./ProductsStyles";
import Header from "../../components/Header/Header";

const Products = () => {
  const dispatch = useDispatch();
  //const products = useSelector((state) => state.products.products);
  const products = useSelector((state) => state.products.filteredProducts); // Obtén los productos filtrados del estado

  useEffect(() => {
    dispatch(setProducts(data));
  }, [dispatch]);

  const handleFilterByCategory = (category) => {
    dispatch(filterProductsByCategory(category)); // Despachar la acción de filtrado con la categoría seleccionada
  };

  return (
    <>
      <ContainerSectionProductsStyled>
        <Header />

        <ContainerCategoriesStyled>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("All")}
            >
              Todos los productos
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("Protein")}
            >
              Proteína
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("FatBurner")}
            >
              Quemador
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("BCAA")}
            >
              BCAA
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("Creatine")}
            >
              Creatina
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("Glutamine")}
            >
              Glutamina
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("L-Carnitine")}
            >
              Carnitina
            </ButtonCategoriesStyled>{" "}
          </motion.div>
        </ContainerCategoriesStyled>
        <ContainerProductsStyled>
          {products.map((product, index) => (
            <CardProduct
              img={product.img}
              title={product.title}
              info={product.info}
              price={product.price}
              key={product.id}
              index={index}
            />
          ))}
        </ContainerProductsStyled>
      </ContainerSectionProductsStyled>
    </>
  );
};

export default Products;

/* ------------------------------------------------ */
