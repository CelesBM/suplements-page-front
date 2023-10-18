import "./App.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Training from "./components/Training";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Training />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
