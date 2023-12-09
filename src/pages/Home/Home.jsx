import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
//import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Training from "../../components/Training/Training";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <Training />
      <Footer />
    </>
  );
};

export default Home;
