"use client";

import React, { FC, useState } from "react";
import {
  Container,
  Header,
  Separator,
  SubHeader,
  Wrapper,
  Error,
  Total,
  Overflow,
} from "./style";
import Image from "next/image";
import cancel from "/public/icons/cancel.svg";
import Button from "../Button";
import Link from "next/link";
import { IProduct } from "@/products";
import CartItem from "../CartItem/CartItem";

interface CartProps {
  close: () => void;
}

const Cart: FC<CartProps> = ({ close }) => {
  const items: { data: IProduct[] } = JSON.parse(
    localStorage.getItem("basket") || '{"data": []}'
  );

  const total = items.data
    .map((item) => item.amount)
    .reduce((acc, cur) => acc + cur);

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
            <Overflow>
              {items.data.map((product) => (
                <CartItem key={product.id} {...product}></CartItem>
              ))}
            </Overflow>

            <Total>
              TOTAL AMOUNT <span>£{total.toFixed(2)}</span>
            </Total>
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
