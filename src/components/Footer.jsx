import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
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
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 30px;

  @media (min-width: 748px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 60px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: 748px) {
    .container {
      gap: 20px;
    }
  }

  .logo {
    width: 100px;
    border-radius: 1rem;
  }

  @media (min-width: 748px) {
    .logo {
      width: 150px;
    }
  }

  h5 {
    font-size: 12px;
    color: #efb810;
  }

  @media (min-width: 748px) {
    h5 {
      font-size: 14px;
    }
  }

  div {
    display: flex;
    gap: 30px;
    margin-top: 10px;
  }

  @media (min-width: 400px) {
    div {
      margin-top: 20px;
      gap: 80px;
    }
  }

  @media (min-width: 500px) {
    div {
      margin-top: 30px;
      gap: 110px;
    }
  }

  @media (min-width: 600px) {
    div {
      margin-top: 35px;
      gap: 140px;
    }
  }

  @media (min-width: 748px) {
    div {
      flex-direction: column;
      gap: 20px;
    }
  }

  img {
    width: 40px;
    border-radius: 4px;
  }

  @media (min-width: 600px) {
    img {
      width: 50px;
    }
  }

  @media (min-width: 748px) {
    img {
      width: 60px;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <img className="logo" src="logo.jpeg" alt="Logo" />
        <h5>Cristian Zambosco</h5>
      </div>
      <div>
        <a href="https://www.instagram.com/" target="_blank">
          <img
            src="https://img.freepik.com/iconos-gratis/instagram_318-566741.jpg"
            alt=""
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFt8zoaKVJ2gZFJoAhO2Qb6Upfqd7yGgC2Sg&usqp=CAU"
            alt=""
          />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank">
          <img
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png"
            alt=""
          />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
