import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/FeaturedProducts/FeaturedProducts";
import Training from "../../components/Training/Training";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Training />
      <Footer />
    </>
  );
};

export default Home;
