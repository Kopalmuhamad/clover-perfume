import React from "react";
import "./Card.scss";

const Card = ({ images }) => {
  return (
    <>
      {images.map((items) => {
        return (
          <a href="#" className="card">
            <img src={items.src} alt={items.name} />
            <div className="card-text">
              <h1>{items.name}</h1>
              <p>{items.price}</p>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default Card;
