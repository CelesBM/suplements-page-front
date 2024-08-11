import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuccessContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  max-width: 400px;
  margin: auto;

  h3 {
    margin: 90px 0px 60px 0px;
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

export const ShippingDetailsStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonStyled = styled.button`
  display: flex;
  background-color: #131311;
  border: none;
  border-radius: 1rem;
  padding: 10px 30px;
  font-size: 14px;
  color: #efb810;
  text-align: center;
  box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  margin: 10px 0px 40px 0px;
  align-items: center;

  @media (min-width: 500px) {
    padding: 15px 50px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 20px 70px;
    font-weight: bold;
  }

  @media (min-width: 1020px) {
    font-size: 18px;
    padding: 20px 100px;
  }

  @media (min-width: 1285px) {
    margin-top: 30px;
    padding: 20px 130px;
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

export const ShippingDataContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: auto;
  margin-bottom: 70px;
  gap: 10px;

  @media (min-width: 768px) {
    margin-bottom: 100px;
  }

  h3 {
    margin: 40px 0px 20px 0px;
    font-size: 16px;
    color: #efb810;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  }

  p {
    font-size: 14px;
    color: #efb810;
    text-align: center;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 768px) {
    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    h3 {
      margin-top: 50px;
      padding: 18px 26px;
      font-size: 20px;
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

  @media (min-width: 500px) {
    flex-wrap: wrap;
    flex-direction: row;
    width: 350px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  .infoContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .productContainer {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    h5 {
      font-size: 14px;
      color: #efb810;
      text-align: center;
      font-weight: bold;
      text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
    }

    @media (min-width: 768px) {
      h5 {
        font-size: 16px;
      }
    }

    p {
      font-size: 14px;
      color: #efb810;
      align-items: flex-end;
      text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
    }

    @media (min-width: 768px) {
      h5 {
        font-size: 16px;
      }
    }
  }

  img {
    width: 120px;
    height: 110px;
  }

  @media (min-width: 768px) {
    img {
      width: 190px;
      height: 220px;
    }
  }

  &.wide-image img {
    width: 210px;
  }

  @media (min-width: 768px) {
    &.wide-image img {
      width: 260px;
    }
  }
`;
