import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../components/Product/productActions";
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
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(setProducts(data));
  }, [dispatch]);

  return (
    <>
      <ContainerSectionProductsStyled>
        <Header />

        <ContainerCategoriesStyled>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled>Todos los productos</ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled>Proteína</ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled>Quemador</ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled>BCAA</ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled>Creatina</ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled>Glutamina</ButtonCategoriesStyled>{" "}
          </motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>
            <ButtonCategoriesStyled>Carnitina</ButtonCategoriesStyled>{" "}
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

/*



const Products = () => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          title={product.title}
          info={product.info}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;*/

/*const Products = () => {
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

export default Products;*/
