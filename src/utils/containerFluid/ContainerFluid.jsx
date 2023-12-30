import React from "react";
import "./ContainerFluid.scss";

const ContainerFluid = ({ children, className, marginTop, marginBottom }) => {
  return (
    <section
      className={`container-fluid ${className}`}
      style={{ marginTop: marginTop, marginBottom: marginBottom }}
    >
      {children}
    </section>
  );
};

export default ContainerFluid;
