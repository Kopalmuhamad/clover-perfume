import React from "react";
import "./Hero.scss";
import ContainerFluid from "../../utils/containerFluid/ContainerFluid";
import { showcaseImage } from "../../libs/images";
import MyCarousel from "../../utils/myCarousel/Carousel";

const Hero = () => {
  return (
    <ContainerFluid>
      <div className="hero-header">
        <h1 className="hero-title">Clover Perfume</h1>
        <p>Preview Our Product</p>
      </div>
      <MyCarousel images={showcaseImage} />
    </ContainerFluid>
  );
};

export default Hero;
