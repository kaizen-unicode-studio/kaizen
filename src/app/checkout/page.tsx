import ElementsProvider from "@/components/ElementsProvider/ElementsProvider";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import React from "react";

const Checkout = () => {
  return (
    <div style={{ background: "var(--main-color)" }}>
      <Header />
      <ElementsProvider />
      <Footer />
    </div>
  );
};

export default Checkout;
