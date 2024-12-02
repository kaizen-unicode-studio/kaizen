"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import bag from "/public/icons/bag.svg";
import { StyledBag } from "./style";
import Modal from "../Modal";
import Cart from "../Cart";
import { IProduct } from "@/products";

const Bag = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    const items: { data: IProduct[] } = JSON.parse(
      localStorage.getItem("basket") || '{"data": []}'
    );
    setTotal(items.data.length);
  };

  useEffect(() => {
    // Initial load
    updateTotal();

    // Event listener for localStorage changes
    const handleStorageChange = () => {
      updateTotal();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledBag onClick={handleToggle}>
      <Image src={bag} alt={"Bag"} width={64} height={64} />
      {total !== 0 && <div>{total}</div>}
      <Modal open={isOpen}>
        <Cart close={handleToggle} />
      </Modal>
    </StyledBag>
  );
};

export default Bag;
