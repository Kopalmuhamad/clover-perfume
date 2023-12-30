import React, { useState } from "react";
import "./Navbar.scss";
import Container from "../../utils/container/Container";

const Navbar = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <Container className="navbar-container">
      <nav className="navbar-wrapper">
        <a href="#" className="logo">
          Clover
        </a>
        <ul className={`menu ${isBurgerActive ? "active" : ""}`}>
          <li>
            <a href="#" className="link nav-link">
              Whatsapp
            </a>
          </li>
          <li>
            <a href="#" className="link nav-link">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="link nav-link">
              Shopee
            </a>
          </li>
        </ul>
        <div
          className="burger-toggle"
          onClick={() => setIsBurgerActive(!isBurgerActive)}
        >
          <div
            className={`burger-line ${isBurgerActive ? "active" : ""}`}
          ></div>
          <div
            className={`burger-line ${isBurgerActive ? "active" : ""}`}
          ></div>
          <div
            className={`burger-line ${isBurgerActive ? "active" : ""}`}
          ></div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
