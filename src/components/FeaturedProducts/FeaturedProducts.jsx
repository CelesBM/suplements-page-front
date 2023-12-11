import React from "react";
import { Link } from "react-router-dom";
import { ContainerProductsStyled } from "./FeaturedProductsStyles";
import { ProductsStyled } from "./FeaturedProductsStyles";
import { ProductStyled } from "./FeaturedProductsStyles";
import { InfoProductStyled } from "./FeaturedProductsStyles";
import { ButtonProductStyled } from "./FeaturedProductsStyles";

const FeaturedProducts = () => {
  return (
    <>
      <ContainerProductsStyled>
        <h3>Productos destacados</h3>
        <ProductsStyled>
          <ProductStyled>
            <img
              src="https://i0.wp.com/www.htn.com.ar/wp-content/uploads/2020/06/htn-pro-xt-gold.png?fit=1024%2C1280&ssl=1"
              alt=""
            />
            <InfoProductStyled>
              <h5>$5000</h5>
              <h4>XT Gold Protein</h4>
            </InfoProductStyled>
          </ProductStyled>
          <ProductStyled>
            <img
              src="https://www.htn.com.ar/wp-content/uploads/2020/08/htn-xplode-creatina.png"
              alt=""
            />
            <InfoProductStyled>
              <h5>$13000</h5>
              <h4>Creatina Monohidrato</h4>
            </InfoProductStyled>
          </ProductStyled>
          <ProductStyled>
            <img
              src="https://www.htn.com.ar/wp-content/uploads/2020/08/htn-xplode-bcaa-pack-micronized.png"
              alt=""
            />
            <InfoProductStyled>
              <h5>$4000</h5>
              <h4>BCAA pack</h4>
            </InfoProductStyled>
          </ProductStyled>
        </ProductsStyled>
        <Link to="/products">
          <ButtonProductStyled>Ver todos los productos</ButtonProductStyled>
        </Link>
      </ContainerProductsStyled>
    </>
  );
};

export default FeaturedProducts;
