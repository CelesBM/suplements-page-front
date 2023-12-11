import styled from "styled-components";

export const ContainerProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
  padding: 50px 30px;

  h3 {
    background-color: #131311;
    border-color: #575652;
    border-radius: 1rem;
    padding: 10px 16px;
    font-size: 14px;
    color: #efb810;
    text-align: center;
    box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 400px) {
    h3 {
      padding: 14px 20px;
      font-size: 15px;
    }
  }

  @media (min-width: 500px) {
    h3 {
      font-size: 16px;
    }
  }

  @media (min-width: 748px) {
    h3 {
      padding: 18px 26px;
      font-size: 18px;
    }
  }
`;

export const ProductsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 748px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const ProductStyled = styled.div`
  background-color: #131311;
  width: 200px;
  height: 250px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);

  @media (min-width: 600px) {
    width: 230px;
    height: 280px;
  }

  @media (min-width: 768px) {
    width: 290px;
    height: 320px;
  }

  @media (min-width: 1220px) {
    width: 330px;
    height: 360px;
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
`;

export const InfoProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h5 {
    color: #7c7c76;
    font-size: 13px;
    text-align: center;
  }

  @media (min-width: 500px) {
    h5 {
      font-size: 15px;
    }
  }

  h4 {
    color: #efb810;
    font-size: 13px;
    text-align: center;
  }

  @media (min-width: 500px) {
    h4 {
      font-size: 15px;
    }
  }
`;

export const ButtonProductStyled = styled.button`
  background-color: #131311;
  border: none;
  border-radius: 1rem;
  padding: 8px 14px;
  font-size: 13px;
  color: #efb810;
  text-align: center;
  box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);

  @media (min-width: 400px) {
    font-size: 14px;
  }

  @media (min-width: 500px) {
    font-size: 15px;
  }
`;
