"use client";

import React, { FC } from "react";
import {
  Container,
  Header,
  Separator,
  SubHeader,
  Wrapper,
  Error,
} from "./style";
import Image from "next/image";
import cancel from "/public/icons/cancel.svg";
import Button from "../Button";
import Link from "next/link";
import Order from "../Order/Order";

interface CartProps {
  close: () => void;
}

const Cart: FC<CartProps> = ({ close }) => {
  const items = localStorage.getItem("basket");

  return (
    <Wrapper>
      <Container
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <Header>
          Shopping cart
          <Image src={cancel} alt={""} width={24} height={24} onClick={close} />
        </Header>
        <Separator />
        {items ? (
          <>
            <Order />
            <Button theme="pay">
              <Link href={"/checkout"}>CHECK OUT</Link>
            </Button>
          </>
        ) : (
          <>
            <SubHeader>OOPS!</SubHeader>
            <Error>looks like your cart is empty</Error>
            <Button theme="pay" onClick={close}>
              <Link href="#services">GO TO THE SERVICES</Link>
            </Button>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Cart;
