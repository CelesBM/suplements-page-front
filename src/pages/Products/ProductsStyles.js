import styled from "styled-components";

export const ContainerSectionProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 100px;
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
      margin-top: 150px;
      padding: 18px 26px;
      font-size: 24px;
    }
  }
`;

export const ContainerProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 80px 30px;

  @media (min-width: 550px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1020px) {
    gap: 80px;
  }
`;

export const ContainerProductStyled = styled.div`
  background-color: #131311;
  width: 230px;
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
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (min-width: 650px) {
    width: 270px;
    height: 350px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
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

export const ProductInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h5 {
    font-weight: bold;
    text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.5);
    font-size: 14px;
    text-align: center;
  }

  @media (min-width: 650px) {
    h5 {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    h5 {
      font-size: 18px;
    }
  }

  h4 {
    font-weight: bold;
    text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.5);
    font-size: 14px;
    text-align: center;

    @media (min-width: 650px) {
      h4 {
        font-size: 16px;
      }
    }

    @media (min-width: 768px) {
      h4 {
        font-size: 18px;
      }
    }
  }
`;

export const ButtonStyled = styled.button`
  background-color: #131311;
  border: none;
  border-radius: 1rem;
  padding: 8px 14px;
  font-size: 12px;
  color: #efb810;
  text-align: center;
  box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);

  @media (min-width: 400px) {
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
