import React from "react";
import "./Product.scss";

import Card from "../../utils/card/Card";
import Container from "../../utils/container/Container";

import { productImage } from "../../libs/images";

const Product = () => {
  return (
    <Container paddingTop={"2rem"} paddingBottom={"4rem"}>
      <div className="product-header">
        <h1>Product</h1>
        <p>Our Product</p>
      </div>
      <div className="card-container">
        <Card images={productImage} />
      </div>
    </Container>
  );
};

export default Product;
