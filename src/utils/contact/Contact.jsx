import React from "react";
import "./Contact.scss";
import Container from "../../utils/container/Container";

const Contact = () => {
  return (
    <Container paddingBottom={"2rem"} paddingTop={"2rem"}>
      <form className="contact-container">
        <section className="contact-header">
          <h1>Contact</h1>
          <p>Get in touch with us</p>
        </section>
        <div className="input-container">
          <input type="text" placeholder="Name : " />
        </div>
        <div className="input-container">
          <input type="email" placeholder="Email : " />
        </div>
        <button className="send-button">Send</button>
      </form>
    </Container>
  );
};

export default Contact;
