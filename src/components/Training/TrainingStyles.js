import styled from "styled-components";

export const ContainerTrainingStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 20px;
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

  img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 748px) {
    img {
      width: 80%;
    }
  }

  p {
    font-size: 15px;
    line-height: 23px;
    color: #efb810;
    text-align: center;
    text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 500px) {
    p {
      font-size: 16px;
    }
  }

  @media (min-width: 748px) {
    p {
      font-size: 20px;
    }
  }
`;
