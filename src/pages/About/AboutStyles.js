import styled from "styled-components";

export const AboutContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 60px 0px 50px 0px;
  padding: 20px 30px;

  @media (min-width: 500px) {
    gap: 50px;
    margin-top: 80px;
  }

  @media (min-width: 768px) {
    margin: 120px 0px 100px 0px;
  }

  @media (min-width: 1020px) {
    padding: 20px 80px;
  }

  @media (min-width: 1285px) {
    padding: 20px 120px;
  }

  p {
    font-size: 13px;
    color: #9e7b13;
    text-align: center;
    line-height: 23px;
    text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 500px) {
    p {
      font-size: 14px;
      line-height: 25px;
    }
  }

  @media (min-width: 700px) {
    p {
      font-size: 15px;
      line-height: 25px;
    }
  }

  @media (min-width: 1000px) {
    p {
      font-size: 16px;
      line-height: 30px;
    }
  }
`;

export const ImageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    width: 80%;
    border-radius: 1rem;
    box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 450px) {
    img {
      width: 70%;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 30%;
    }
  }
`;
