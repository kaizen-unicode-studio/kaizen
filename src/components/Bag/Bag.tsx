"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import bag from "/public/icons/bag.svg";
import { StyledBag } from "./style";
import Modal from "../Modal";
import Cart from "../Cart";
import { IProduct } from "@/products";
import { ModalInstance } from "@/utils";

const Bag = () => {
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(ModalInstance.isOpen);

  const updateTotal = () => {
    const items: { data: IProduct[] } = JSON.parse(
      localStorage.getItem("basket") || '{"data": []}'
    );
    setTotal(items.data.length);
  };

  useEffect(() => {
    const updateState = () => setIsOpen(ModalInstance.isOpen);

    ModalInstance.subscribe(updateState);

    return () => {
      ModalInstance.unsubscribe(updateState);
    };
  }, []);

  useEffect(() => {
    updateTotal();

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
