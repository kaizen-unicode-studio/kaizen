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
import right_arrow from "/public/icons/right_arrow.svg";
import { IProduct } from "@/products";

interface CartProps {
  close: () => void;
}

const Cart: FC<CartProps> = ({ close }) => {
  const items: { data: IProduct[] } = JSON.parse(
    localStorage.getItem("basket") || `{"data": []}`
  );

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
        {items.data.length ? (
          <>
            <Order />
            <Button theme="pay" isLink>
              <Link href={"/checkout"}>
                CHECK OUT
                <Image src={right_arrow} alt={""} width={24} height={24} />
              </Link>
            </Button>
          </>
        ) : (
          <>
            <SubHeader>OOPS!</SubHeader>
            <Error>looks like your cart is empty</Error>
            <Button theme="pay" onClick={close} isLink>
              <Link onClick={close} href="/#services">
                GO TO THE SERVICES
                <Image src={right_arrow} alt={""} width={24} height={24} />
              </Link>
            </Button>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Cart;
