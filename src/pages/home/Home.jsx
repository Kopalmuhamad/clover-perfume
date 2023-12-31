import React from "react";
import "./Home.scss";

import { productImage, showcaseImage } from "../../libs/images";
import MyCarousel from "../../utils/myCarousel/Carousel";
import ContainerFluid from "../../utils/containerFluid/ContainerFluid";
import Product from "../../components/product/Product";
import Hero from "../../components/hero/Hero";
import VideoTrailer from "../../components/videoTrailer/VideoTrailer";
import BestSeller from "../../components/bestSeller/BestSeller";
import Contact from "../../utils/contact/Contact";

const Home = () => {
  return (
    <ContainerFluid marginTop={"8rem"}>
      <Hero />
      <BestSeller />
      <VideoTrailer />
      <Product />
      <Contact />
    </ContainerFluid>
  );
};

export default Home;
