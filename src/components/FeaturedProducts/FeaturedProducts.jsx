import React from "react";
import { ContainerProductsStyled } from "./FeatureProducts";
import { ProductsStyled } from "./FeatureProducts";
import { ProductStyled } from "./FeatureProducts";
import { InfoProductStyled } from "./FeatureProducts";
import { ButtonProductStyled } from "./FeatureProducts";

const Products = () => {
  return (
    <>
      <ContainerProductsStyled>
        <h3>Productos destacados</h3>
        <ProductsStyled>
          <ProductStyled>
            <img
              src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
              alt=""
            />
            <InfoProductStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
            </InfoProductStyled>
          </ProductStyled>
          <ProductStyled>
            <img
              src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
              alt=""
            />
            <InfoProductStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
            </InfoProductStyled>
          </ProductStyled>
          <ProductStyled>
            <img
              src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
              alt=""
            />
            <InfoProductStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
            </InfoProductStyled>
          </ProductStyled>
        </ProductsStyled>

        <ButtonProductStyled>Ver más</ButtonProductStyled>
      </ContainerProductsStyled>
    </>
  );
};

export default Products;
