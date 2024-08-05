import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { products as data } from "../../data/productsData";
import Header from "../../components/Header/Header";
import CardProduct from "../../components/Product/CardProduct";
import { addToShop } from "../../redux/shop/shopSlice";
import {
  setProducts,
  filterProductsByCategory,
} from "../../redux/Product/productSlice";
import {
  ContainerProductsStyled,
  ContainerSectionProductsStyled,
  ContainerCategoriesStyled,
  ButtonCategoriesStyled,
} from "./ProductsStyles";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);

  useEffect(() => {
    dispatch(setProducts(data));
  }, [dispatch]);

  // Filtra por categoria:
  const handleFilterByCategory = (category, product) => {
    dispatch(filterProductsByCategory(category));
    setActiveCategory(category);
    dispatch(addToShop(product));
  };

  return (
    <>
      <ContainerSectionProductsStyled>
        <Header />
        <ContainerCategoriesStyled>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("All")}
              style={{
                backgroundColor:
                  activeCategory === "All" ? "#2a2a28" : "initial",
                color: activeCategory === "All" ? "#efb810" : "#575748",
              }}
            >
              Todos los productos
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("Protein")}
              style={{
                backgroundColor:
                  activeCategory === "Protein" ? "#2a2a28" : "initial",
                color: activeCategory === "Protein" ? "#efb810" : "#575748",
              }}
            >
              Proteína
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("FatBurner")}
              style={{
                backgroundColor:
                  activeCategory === "FatBurner" ? "#2a2a28" : "initial",
                color: activeCategory === "FatBurner" ? "#efb810" : "#575748",
              }}
            >
              Quemador
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("BCAA")}
              style={{
                backgroundColor:
                  activeCategory === "BCAA" ? "#2a2a28" : "initial",
                color: activeCategory === "BCAA" ? "#efb810" : "#575748",
              }}
            >
              BCAA
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("Creatine")}
              style={{
                backgroundColor:
                  activeCategory === "Creatine" ? "#2a2a28" : "initial",
                color: activeCategory === "Creatine" ? "#efb810" : "#575748",
              }}
            >
              Creatina
            </ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}></motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled
              onClick={() => handleFilterByCategory("L-Carnitine")}
              style={{
                backgroundColor:
                  activeCategory === "L-Carnitine" ? "#2a2a28" : "initial",
                color: activeCategory === "L-Carnitine" ? "#efb810" : "#575748",
              }}
            >
              Carnitina
            </ButtonCategoriesStyled>{" "}
          </motion.div>
        </ContainerCategoriesStyled>
        <ContainerProductsStyled>
          {products.map((product, index) => (
            <CardProduct
              id={product.id}
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
              key={product.id}
              index={index}
              onClick={() => handleFilterByCategory(activeCategory, product)}
            />
          ))}
        </ContainerProductsStyled>
      </ContainerSectionProductsStyled>
    </>
  );
};

export default Products;
