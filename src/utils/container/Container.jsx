import React from "react";
import "./Container.scss";

const Container = ({ children, className, paddingTop, paddingBottom }) => {
  return (
    <section
      className={`container ${className}`}
      style={{ paddingTop: paddingTop, paddingBottom: paddingBottom }}
    >
      {children}
    </section>
  );
};

export default Container;
