import styled from "styled-components";

export const NotFoundContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 200px 20px;

  @media (min-width: 768px) {
    padding: 100px 20px;
  }

  h1 {
    font-size: 18px;
    color: #efb810;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }

  img {
    width: 250px;
    border-radius: 1rem;
  }

  @media (min-width: 768px) {
    img {
      width: 500px;
    }
  }
`;
