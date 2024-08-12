import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const useAppShopContext = () => {
  return useContext(ShopContext);
};

export const ShopContextProvider = ({ children }) => {
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };

  const contextValue = {
    isShopOpen,
    toggleShop,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
