import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ContextProvider } from "./Context/ContextMenu";
import { ShopContextProvider } from "./Context/ContextShop";
import Router from "./Router/Router";

function App() {
  return (
    <>
      <ContextProvider>
        <ShopContextProvider>
          <Router />
        </ShopContextProvider>
      </ContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
