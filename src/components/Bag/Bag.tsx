"use client";

import React, { useState } from "react";
import Image from "next/image";
import bag from "/public/icons/bag.svg";
import { StyledBag } from "./style";
import Modal from "../Modal";
import Cart from "../Cart";

const Bag = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledBag onClick={handleToggle}>
      <Image src={bag} alt={""} width={64} height={64} />
      <Modal open={isOpen}>
        <Cart close={handleToggle} />
      </Modal>
    </StyledBag>
  );
};

export default Bag;
