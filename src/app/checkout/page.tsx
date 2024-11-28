import ElementsProvider from "@/components/ElementsProvider/ElementsProvider";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Checkout",
};

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
