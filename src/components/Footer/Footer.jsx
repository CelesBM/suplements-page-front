import React from "react";
import { FooterStyled } from "./FooterStyles";
import { ContainerLogoStyled } from "./FooterStyles";
import { ContainerSocialMediaStyled } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterStyled>
      <ContainerLogoStyled>
        <img src="logo.jpeg" alt="Logo" />
        <h5>Cristian Zambosco</h5>
      </ContainerLogoStyled>
      <ContainerSocialMediaStyled>
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
      </ContainerSocialMediaStyled>
    </FooterStyled>
  );
};

export default Footer;
