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
              src="https://dcdn.mitiendanube.com/stores/001/309/032/products/best-whey1-dd320c05fb7e7337bb15985414105884-1024-1024.png"
              alt=""
            />
            <InfoProductStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
            </InfoProductStyled>
          </ProductStyled>
          <ProductStyled>
            <img
              src="https://acdn.mitiendanube.com/stores/001/224/919/products/advance-whey-vainilla-4f2196804dc8177b1816263833768553-240-0.png"
              alt=""
            />
            <InfoProductStyled>
              <h5>$5000</h5>
              <h4>CLA</h4>
            </InfoProductStyled>
          </ProductStyled>
          <ProductStyled>
            <img
              src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/106/887/products/glutamine-5001-673a9209fb7752824016257704688252-480-0.png"
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
