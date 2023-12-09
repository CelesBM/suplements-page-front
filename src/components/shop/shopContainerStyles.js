import styled from "styled-components";

export const ShopContainerStyled = styled.div`
  position: fixed;
  top: 70px;
  right: 0px;
  width: 200px;
  border-bottom-left-radius: 20px;
  background: linear-gradient(
    0deg,
    rgba(177, 172, 67, 1) 0%,
    rgba(138, 135, 74, 1) 4%,
    rgba(98, 97, 71, 1) 16%,
    rgba(70, 69, 53, 1) 22%,
    rgba(35, 35, 31, 1) 38%,
    rgba(35, 35, 31, 1) 44%,
    rgba(35, 35, 31, 1) 46%,
    rgba(36, 36, 30, 1) 50%,
    rgba(34, 34, 31, 1) 59%,
    rgba(25, 25, 23, 1) 77%,
    rgba(20, 20, 19, 1) 89%,
    rgba(20, 20, 19, 1) 89%,
    rgba(19, 19, 17, 1) 97%
  );
  padding: 15px 10px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  z-index: 999;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (min-width: 400px) {
    width: 250px;
    padding-right: 25px;
  }

  @media (min-width: 500px) {
    width: 350px;
    padding-right: 35px;
    gap: 20px;
  }

  @media (min-width: 768px) {
    top: 100px;
    width: 450px;
    padding-right: 50px;
  }

  h3 {
    font-size: 14px;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (min-width: 450px) {
    h3 {
      font-size: 15px;
    }
  }

  @media (min-width: 500px) {
    h3 {
      font-size: 16px;
    }
  }

  .empty-shop {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 500px) {
    .empty-shop {
      font-size: 14px;
    }
  }
`;

export const ShopProductsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: stretch;
  gap: 20px;

  @media (min-width: 500px) {
    gap: 40px;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  @media (min-width: 500px) {
    gap: 10px;
  }
`;

export const ProductImageStyled = styled.img`
  width: ${({ small }) => (small ? "500px" : "150px")};
`;

export const SpanStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 5px;
  text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);

  @media (min-width: 500px) {
    gap: 10px;
  }

  h4 {
    color: #efb810;
  }

  @media (min-width: 450px) {
    h4 {
      font-size: 14px;
    }
  }

  p {
    font-weight: bold;
  }

  @media (min-width: 450px) {
    p {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 16px;
    }
  }
`;
export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ContainerButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: 450px) {
    gap: 8px;
  }

  button {
    background-color: #131311;
    border: none;
    border-radius: 1rem;
    padding: 0px 4px;
    font-size: 14px;
    color: #efb810;
    text-align: center;
  }

  @media (min-width: 450px) {
    button {
      padding: 2px 6px;
      font-size: 15px;
    }
  }

  @media (min-width: 768px) {
    button {
      padding: 3px 8px;
      font-size: 18px;
    }
  }

  p {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 450px) {
    p {
      font-size: 15px;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 17px;
    }
  }
`;

export const IconStyled = styled.div`
  color: #9e7b13;
  font-size: 20px;

  @media (min-width: 450px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const TotalPriceStyled = styled.div`
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.2);
  margin: 10px 0px;

  @media (min-width: 450px) {
    font-size: 15px;
  }

  @media (min-width: 768px) {
    margin: 20px 0px;
    font-size: 16px;
  }
`;

export const ButtonStyled = styled.div`
  background-color: #131311;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 1rem;
  padding: 4px 10px;
  font-size: 12px;
  color: #efb810;
  font-weight: bold;
  text-align: center;

  @media (min-width: 450px) {
    padding: 8px 12px;
    font-size: 13px;
  }

  @media (min-width: 768px) {
    padding: 10px 16px;
    font-size: 15px;
  }
`;
