import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainerStyled = styled.div`
  max-width: 400px;
  margin: auto;
  margin-bottom: 70px;

  @media (min-width: 768px) {
    margin-bottom: 110px;
  }

  @media (min-width: 768px) {
    margin-bottom: 130px;
  }

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

export const LoginStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const LoginGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 13px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const LabelStyled = styled.label`
  color: #efb810;
  text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.5);
  font-size: 13px;
  text-align: center;
  width: 80px;
  padding: 5px;

  @media (min-width: 400px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    margin-bottom: 5px;
    font-size: 15px;
  }

  @media (min-width: 1020px) {
    font-size: 18px;
  }
`;

export const InputStyled = styled.input`
  font-size: 13px;
  color: #575748;
  font-weight: bold;
  width: 260px;
  border-radius: 4px;
  padding: 8px;
  background-color: #131311;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);

  &:focus {
    background-color: #1e1e1e;
  }

  @media (min-width: 400px) {
    width: 280px;
  }

  @media (min-width: 500px) {
    width: 350px;
  }

  @media (min-width: 768px) {
    width: 550px;
    height: 50px;
  }

  @media (min-width: 1020px) {
    width: 750px;
  }

  @media (min-width: 1285px) {
    width: 1000px;
  }
`;

export const ButtonStyled = styled.button`
  background-color: #131311;
  border: none;
  border-radius: 1rem;
  padding: 10px 30px;
  font-size: 14px;
  color: #efb810;
  text-align: center;
  box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  margin-top: 30px;

  @media (min-width: 500px) {
    padding: 15px 50px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 20px 70px;
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
