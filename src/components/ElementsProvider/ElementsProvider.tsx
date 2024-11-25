"use client";
import { IProduct } from "@/products";
import CheckoutPage from "@/sections/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51Q5MVHK3Qri9t8WuOL0RIOeGPgwuCKuXJ9EEIJcSMBbtZ5Ncq4dafZ25Yk0PBxU2Vkc4Bej2Kn4Q8ImebWJTMx0D00vrX1OB9z"
);
const ElementsProvider = () => {
  const items: { data: IProduct[] } = JSON.parse(
    localStorage.getItem("basket") || '{"data": []}'
  );

  const total = items.data
    .map((item) => item.amount)
    .reduce((acc, cur) => acc + cur);

  const currency = { symbol: "$", currency: "usd" };

  return (
    <>
      {total && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: Math.round(total * 100),
            currency: currency.currency,
          }}
        >
          <CheckoutPage amount={total} currency={currency} />
        </Elements>
      )}
    </>
  );
};

export default ElementsProvider;
