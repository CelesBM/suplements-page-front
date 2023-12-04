import React from "react";
//import { Provider } from "react-redux";
//import { store } from "./redux/store/store";
import "./App.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ContextProvider } from "./Context/Context";
import Router from "./Router/Router";

function App() {
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider>

      <GlobalStyles />
    </>
  );
}

export default App;
