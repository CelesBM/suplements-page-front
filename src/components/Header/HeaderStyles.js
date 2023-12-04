import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeaderContainerStyled = styled.header`
  background: rgb(177, 172, 67);
  background: linear-gradient(
    180deg,
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
  width: 100%;
  height: 70px;
  text-align: center;
  padding: 8px 5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

export const NavbarContainerStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0px 10px;

  @media (min-width: 400px) {
    padding: 0px 20px;
  }

  @media (min-width: 400px) {
    padding: 0px 25px;
  }

  @media (min-width: 768px) {
    padding: 0px 50px;
  }

  @media (min-width: 1020px) {
    padding: 0px 70px;
  }

  img {
    width: 70px;
    border-radius: 1rem;
  }

  @media (min-width: 500px) {
    img {
      width: 90px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 120px;
    }
  }
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  gap: 30px;

  @media (min-width: 1020px) {
    gap: 70px;
  }
`;

export const LinkContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconStyled = styled.div`
  color: #9e7b13;
`;

export const SpanStyled = styled.div`
  color: #575748;
  font-weight: bold;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);
`;

export const HamburguerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #9e7b13;

  @media (min-width: 450px) {
    font-size: 40px;
  }

  @media (min-width: 500px) {
    font-size: 50px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

export const LinkHamburguerStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #9e7b13;
`;

export const LinkHamburguerContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  position: absolute;
  top: 75px;
  right: 0px;
  background: rgb(177, 172, 67);
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
  padding: 20px;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ItemHamburguerMenuStyled = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);
`;

export const MotionDivStyled = styled(motion.div)`
  display: flex;
  gap: 8px;
  align-items: center;
`;
