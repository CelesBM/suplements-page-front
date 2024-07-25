import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAppMenuContext } from "../../Context/ContextMenu";
import { useAppShopContext } from "../../Context/ContextShop";
import ShopContainer from "../shop/shopContainer";
import {
  HeaderContainerStyled,
  NavbarContainerStyled,
  LinksContainerStyled,
  LinkContainerStyled,
  IconStyled,
  SpanStyled,
  HamburguerStyled,
  LinkStyled,
  MotionDivStyled,
} from "./HeaderStyles";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { PiShoppingBagFill } from "react-icons/pi";
import { BiMenuAltRight } from "react-icons/bi";
import { IoFitnessSharp } from "react-icons/io5";
import { IconLength } from "../shop/IconLenght";
import { HamburguerMenu } from "../HamburguerMenu/HamburguerMenu";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useAppMenuContext(); // Context para abrir el menú hamburguesa
  const { isShopOpen, toggleShop } = useAppShopContext(); // Context para abrir el carrito de compras

  const handleMenuToggle = () => {
    toggleMenu();
    if (isShopOpen) {
      toggleShop(); // Cierra el carrito si está abierto al abrir el menú
    }
  };

  const handleShopToggle = () => {
    toggleShop();
    if (isMenuOpen) {
      toggleMenu(); // Cierra el menú si está abierto al abrir el carrito
    }
  };

  return (
    <HeaderContainerStyled>
      <NavbarContainerStyled>
        <div>
          <Link to="/Home">
            <img src="logo.jpeg" alt="Logo" />
          </Link>
        </div>
        <LinksContainerStyled isMenuOpen={isMenuOpen}>
          <LinkContainerStyled>
            <MotionDivStyled
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <IconStyled>
                <BsFillPersonFill />
              </IconStyled>
              <LinkStyled to="/Login">
                <SpanStyled>Iniciar Sesión</SpanStyled>
              </LinkStyled>
            </MotionDivStyled>
          </LinkContainerStyled>
          <LinkContainerStyled>
            <MotionDivStyled
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <IconStyled>
                <IoFitnessSharp />
              </IconStyled>
              <LinkStyled to="/About">
                <SpanStyled>Sobre mí</SpanStyled>
              </LinkStyled>
            </MotionDivStyled>
          </LinkContainerStyled>
          <LinkContainerStyled>
            <MotionDivStyled
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <IconStyled>
                <PiShoppingBagFill />
              </IconStyled>
              <LinkStyled to="/Products">
                <SpanStyled>Productos</SpanStyled>
              </LinkStyled>
            </MotionDivStyled>
          </LinkContainerStyled>
          <LinkContainerStyled>
            <MotionDivStyled
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <IconStyled>
                <BsEnvelopeFill />
              </IconStyled>
              <LinkStyled to="/Contact">
                <SpanStyled>Contacto</SpanStyled>
              </LinkStyled>
            </MotionDivStyled>
          </LinkContainerStyled>
          <IconStyled onClick={handleShopToggle}>
            <IconLength />
          </IconStyled>
          <HamburguerStyled onClick={handleMenuToggle}>
            <motion.div whileTap={{ scale: 1.2 }}>
              <BiMenuAltRight />
            </motion.div>
          </HamburguerStyled>
          {/*Lógica para desplegar el menú hamburguesa*/}
          {isMenuOpen && <HamburguerMenu />}
          {/*Lógica para desplegar el carrito de compras*/}
          {isShopOpen && <ShopContainer isOpen={isShopOpen} />}
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Header;
