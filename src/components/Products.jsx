import React from "react";
import styled from "styled-components";

const StyledProducts = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 80px 30px;

  h3 {
    background-color: #131311;
    border-color: #575652;
    border-radius: 1rem;
    padding: 10px 16px;
    font-size: 15px;
    color: #efb810;
    text-align: center;
    box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 400px) {
    h3 {
      padding: 14px 20px;
      font-size: 18px;
    }
  }

  @media (min-width: 748px) {
    h3 {
      padding: 18px 26px;
      font-size: 22px;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: 748px) {
    .container {
      flex-direction: row;
      gap: 50px;
    }
  }

  .product {
    background-color: #131311;
    width: 250px;
    height: 280px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 650px) {
    .product {
      width: 270px;
      height: 300px;
    }
  }

  @media (min-width: 768px) {
    .product {
      width: 290px;
      height: 320px;
    }
  }

  @media (min-width: 1220px) {
    .product {
      width: 330px;
      height: 360px;
    }
  }

  img {
    width: 140px;
    height: 150px;
    border-radius: 1rem;
  }

  @media (min-width: 650px) {
    img {
      width: 160px;
      height: 170px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 180px;
      height: 190px;
    }
  }

  @media (min-width: 1220px) {
    img {
      width: 220px;
      height: 230px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  h5 {
    color: #efb810;
    font-size: 14px;
    text-align: center;
  }

  h4 {
    color: #efb810;
    font-size: 14px;
    text-align: center;
  }

  button {
    background-color: #131311;
    border: none;
    border-radius: 1rem;
    padding: 8px 14px;
    font-size: 14px;
    color: #efb810;
    text-align: center;
    box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 400px) {
    button {
      font-size: 16px;
    }
  }
`;

const Products = () => {
  return (
    <StyledProducts>
      <h3>Productos destacados</h3>
      <div className="container">
        <div className="product">
          <img
            src="https://www.tiendaculturista.com/blog/wp-content/uploads/2019/05/LIFE-PRO-ESSENTIALS-CLA.jpg"
            alt=""
          />
          <div className="info">
            <h5>$5000</h5>
            <h4>CLA</h4>
          </div>
        </div>
        <div className="product">
          <img
            src="https://www.puntofarma.com.py/imagenes/public/images/Premium-Whey-Banana-Split-Lander-Fit-970gr-46311.jpg"
            alt=""
          />
          <div className="info">
            <h5>$5000</h5>
            <h4>Proteina</h4>
          </div>
        </div>

        <div className="product">
          <img
            src="https://www.puntofarma.com.py/imagenes/public/images/Premium-Whey-Banana-Split-Lander-Fit-970gr-46311.jpg"
            alt=""
          />
          <div className="info">
            <h5>$5000</h5>
            <h4>Proteina</h4>
          </div>
        </div>
      </div>

      <button>Ver más</button>
    </StyledProducts>
  );
};

export default Products;
