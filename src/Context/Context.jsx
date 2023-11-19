import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export const useAppContext = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const contextValue = {
    isMenuOpen,
    toggleMenu,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
