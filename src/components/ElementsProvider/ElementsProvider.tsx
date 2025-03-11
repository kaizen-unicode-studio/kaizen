"use client";
import { IProduct } from "@/products";
import CheckoutPage from "@/sections/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { SubHeader, Error, Empty, Loader, LoaderWrapper } from "./style";
import { useEffect, useState } from "react";
import Button from "../Button";
import Link from "next/link";
import loader from "/public/icons/loader.svg";
import Image from "next/image";

const pub_token = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_TOKEN;
const ElementsProvider = () => {
  const stripePromise = loadStripe(pub_token!);
  const [items, setItems] = useState<{ data: IProduct[] }>({ data: [] });
  const total = items.data
    .map((item) => item.amount)
    .reduce((acc, cur) => acc + cur, 0);
  const updateItems = () => {
    const items: { data: IProduct[] } = JSON.parse(
      localStorage.getItem("basket") || '{"data": []}'
    );
    setItems(items);
  };

  useEffect(() => {
    updateItems();

    const handleStorageChange = () => {
      updateItems();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const currency = { symbol: "$", currency: "usd" };

  return (
    <>
      {!items.data.length ? (
        <Empty>
          <SubHeader>OOPS!</SubHeader>
          <Error>looks like your cart is empty</Error>
          <Button theme="pay" isLink>
            <Link href="/#services">GO TO THE SERVICES</Link>
          </Button>
        </Empty>
      ) : !!total && stripePromise ? (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: Math.round(total * 100),
            currency: currency.currency,
            locale: "en",
          }}
        >
          <CheckoutPage amount={total} currency={currency} />
        </Elements>
      ) : (
        <>
          <LoaderWrapper>
            <Loader>
              <Image src={loader} alt="" />
            </Loader>
          </LoaderWrapper>
        </>
      )}
    </>
  );
};

export default ElementsProvider;
