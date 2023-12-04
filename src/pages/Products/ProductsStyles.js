import styled from "styled-components";

export const ContainerSectionProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 15px;
    font-size: 16px;
    color: #efb810;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  }
`;

export const ContainerProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px 30px;

  @media (min-width: 500px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const ContainerCategoriesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-top: 100px;

  @media (min-width: 500px) {
    margin-top: 130px;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const ButtonCategoriesStyled = styled.button`
  background-color: #131311;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
  color: #575748;
  font-weight: bold;
  text-align: center;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.2);

  @media (min-width: 500px) {
    padding: 8px 18px;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (min-width: 1120px) {
    padding: 14px 25px;
  }
`;
export const ContainerProductStyled = styled.div`
  background-color: #131311;
  width: 230px;
  height: 350px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);

  @media (min-width: 500px) {
    width: 270px;
    height: 380px;
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 480px;
    padding: 20px;
  }

  @media (min-width: 1120px) {
    width: 320px;
    height: 480px;
    padding: 30px;
  }

  img {
    width: 160px;
    height: 150px;
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

export const ProductInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media (min-width: 768px) {
    h3 {
      font-size: 18px;
    }
  }

  h5 {
    color: #7c7c76;
    font-size: 12px;
    text-align: center;
  }

  @media (min-width: 768px) {
    h5 {
      font-size: 14px;
    }
  }

  p {
    color: #bbbbb3;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 768px) {
    p {
      font-size: 16px;
    }
  }
`;

export const ButtonStyled = styled.button`
  background-color: #131311;
  border: none;
  border-radius: 1rem;
  padding: 8px 14px;
  font-size: 14px;
  color: #efb810;
  text-align: center;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    padding: 10px 18px;
    font-size: 16px;
  }
`;

/*



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
}*/
