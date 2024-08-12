import styled from "styled-components";
import { Link } from "react-router-dom";

export const PurchasesContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
  gap: 40px;
  margin-bottom: 90px;

  h3 {
    margin-top: 90px;
    font-size: 18px;
    color: #efb810;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 400px) {
    h3 {
      padding: 14px 20px;
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    h3 {
      margin-top: 130px;
      padding: 18px 26px;
      font-size: 22px;
    }
  }

  h4 {
    font-size: 14px;
    color: #efb810;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 400px) {
    h4 {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    h4 {
      font-size: 18px;
    }
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const PurchaseDataContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: auto;
  gap: 10px;

  h3 {
    margin: 90px 0px 40px 0px;
    font-size: 18px;
    color: #efb810;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 400px) {
    h3 {
      padding: 14px 20px;
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    h3 {
      margin-top: 130px;
      padding: 18px 26px;
      font-size: 22px;
    }
  }

  h4 {
    margin: 75px 0px 40px 0px;
    font-size: 14px;
    color: #efb810;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 400px) {
    h4 {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    h4 {
      margin-top: 90px;
    }
  }
`;

export const PurchaseDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-color: #efb810 solid 1px;
`;

export const ContainerProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  width: 280px;
  color: #efb810;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 50px 60px;
  }

  @media (min-width: 500px) {
    width: 350px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  .product {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 16px;
  }

  li {
    font-size: 16px;
    list-style-type: none;
  }
`;
