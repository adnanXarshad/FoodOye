import React from "react";
import Breakfast from "../components/breakfast/Breakfast";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ServingInfo from "../components/serving-info/ServingInfo";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ServingInfo />
      <Breakfast/>
      <Footer />
    </div>
  );
};

export default Home;
