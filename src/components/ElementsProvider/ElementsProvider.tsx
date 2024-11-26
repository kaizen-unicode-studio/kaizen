"use client";
import { IProduct } from "@/products";
import CheckoutPage from "@/sections/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { TextSection, TopHeader, Text, Container } from "./style";
import { useMemo } from "react";

const stripePromise = loadStripe(
  "pk_test_51Q5MVHK3Qri9t8WuOL0RIOeGPgwuCKuXJ9EEIJcSMBbtZ5Ncq4dafZ25Yk0PBxU2Vkc4Bej2Kn4Q8ImebWJTMx0D00vrX1OB9z"
);
const ElementsProvider = () => {
  const items: { data: IProduct[] } = useMemo(() => {
    if (typeof window !== undefined) {
      return JSON.parse(
        window?.localStorage.getItem("basket") || '{"data": []}'
      );
    }
    return null;
  }, [window]);

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
          <Container>
            <TextSection>
              <TopHeader>
                KAI<span>ZEN</span>
              </TopHeader>
              <Text>
                Improving your health through mindful choices is at the heart of
                our philosophy, where zest for life grows by prioritizing
                nutrition. Elevate your well-being with our holistic approach,
                nurturing your body and soul through the principles of lifelong
                improvement. Transform yourself with Kaizen.
              </Text>
            </TextSection>
          </Container>
          <CheckoutPage amount={total} currency={currency} />
        </Elements>
      )}
    </>
  );
};

export default ElementsProvider;
