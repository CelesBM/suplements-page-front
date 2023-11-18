import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/Context";
import { motion } from "framer-motion";
import { HeaderContainerStyled } from "./HeaderStyles";
import { NavbarContainerStyled } from "./HeaderStyles";
import { LinksContainerStyled } from "./HeaderStyles";
import { LinkContainerStyled } from "./HeaderStyles";
import { IconStyled } from "./HeaderStyles";
import { SpanStyled } from "./HeaderStyles";
import { HamburguerStyled } from "./HeaderStyles";
import { LinkHamburguerContainerStyled } from "./HeaderStyles";
import { ItemHamburguerMenuStyled } from "./HeaderStyles";
import { LinkStyled } from "./HeaderStyles";
import { LinkHamburguerStyled } from "./HeaderStyles";
import { MotionDivStyled } from "./HeaderStyles";
import { IoIosHome } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { PiShoppingBagFill } from "react-icons/pi";
import { BiMenuAltRight } from "react-icons/bi";
import { IoFitnessSharp } from "react-icons/io5";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();

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
                <IoIosHome />
              </IconStyled>

              <LinkStyled to="/Home">
                <SpanStyled>Home</SpanStyled>
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
                <BsFillPersonFill />
              </IconStyled>
              <LinkStyled to="/Contact">
                <SpanStyled>Contacto</SpanStyled>
              </LinkStyled>
            </MotionDivStyled>
          </LinkContainerStyled>
          <HamburguerStyled onClick={toggleMenu}>
            <motion.div whileTap={{ scale: 1.2 }}>
              <BiMenuAltRight />
            </motion.div>
          </HamburguerStyled>

          {isMenuOpen && (
            <LinkHamburguerContainerStyled>
              <MotionDivStyled
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <ItemHamburguerMenuStyled>
                  <LinkHamburguerStyled to="/Home">Home</LinkHamburguerStyled>
                </ItemHamburguerMenuStyled>
              </MotionDivStyled>
              <MotionDivStyled
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <ItemHamburguerMenuStyled>
                  <LinkHamburguerStyled to="/About">
                    Sobre mí
                  </LinkHamburguerStyled>
                </ItemHamburguerMenuStyled>
              </MotionDivStyled>
              <MotionDivStyled
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <ItemHamburguerMenuStyled>
                  <LinkHamburguerStyled to="/Products">
                    Productos
                  </LinkHamburguerStyled>
                </ItemHamburguerMenuStyled>
              </MotionDivStyled>
              <MotionDivStyled
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <ItemHamburguerMenuStyled>
                  <LinkHamburguerStyled to="/Contact">
                    Contacto
                  </LinkHamburguerStyled>
                </ItemHamburguerMenuStyled>
              </MotionDivStyled>
            </LinkHamburguerContainerStyled>
          )}
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Header;
