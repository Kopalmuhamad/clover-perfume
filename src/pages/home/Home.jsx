import React from "react";
import "./Home.scss";

import { productImage, showcaseImage } from "../../libs/images";
import MyCarousel from "../../utils/myCarousel/Carousel";
import ContainerFluid from "../../utils/containerFluid/ContainerFluid";
import Product from "../../components/product/Product";
import Hero from "../../components/hero/Hero";
import VideoTrailer from "../../components/videoTrailer/VideoTrailer";

const Home = () => {
  return (
    <ContainerFluid marginTop={"8rem"}>
      <Hero />
      <VideoTrailer />
      <Product />
    </ContainerFluid>
  );
};

export default Home;
