import React from "react";
import "./Carousel.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContainerFluid from "../containerFluid/ContainerFluid";

const MyCarousel = ({ images }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <ContainerFluid>
        <Carousel
          responsive={responsive}
          infinite={true}
          containerClass="image-slider-container"
          itemClass="items-slider"
          centerMode={true}
          swipeable={true}
          draggable={true}
        >
          {images.map((items, index) => {
            return (
              <img
                src={items.src}
                alt=""
                className="images-slider"
                key={index}
              />
            );
          })}
        </Carousel>
      </ContainerFluid>
    </>
  );
};

export default MyCarousel;
