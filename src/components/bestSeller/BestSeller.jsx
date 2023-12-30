import React from "react";
import "./BestSeller.scss";
import Container from "../../utils/container/Container";
import { faith, luck } from "../../libs/images";

const BestSeller = () => {
  return (
    <Container
      paddingTop={"4rem"}
      paddingBottom={"4rem"}
      className={"bestseller-container"}
    >
      <div className="bestseller-images-wrapper">
        <h1>Newest</h1>
        {luck.slice(0, 1).map((items, index) => {
          return (
            <img
              src={items.src}
              alt=""
              key={index}
              className="bestseller-images"
            />
          );
        })}
      </div>
      <div className="bestseller-images-wrapper">
        <h1>Best Seller</h1>
        {faith.slice(0, 1).map((items, index) => {
          return (
            <img
              src={items.src}
              alt=""
              key={index}
              className="bestseller-images"
            />
          );
        })}
      </div>
    </Container>
  );
};

export default BestSeller;
