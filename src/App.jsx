import "./App.css";
//import Routes from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";
//import Home from "./pages/Home";
//import About from "./pages/About/About";
//import Products from "./pages/Products/Products.jsx";
//import Contact from "./pages/Contact/Contact.jsx";
//import Header from "./components/Header/Header";
import { ContextProvider } from "./Context/Context";
//import Hero from "./components/Hero/Hero";
//import Training from "./components/Training";
//import Footer from "./components/Footer";
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
