"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import Order from "@/components/Order/Order";
import donut from "/public/covers/donut.svg";
import { Container, Grid, Header, OrderWrapper, SubHeader } from "./style";
import { useForm } from "react-hook-form";

export interface Fields {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}

const CheckoutPage = ({
  amount,
  currency,
}: {
  amount: number;
  currency: { symbol: string; currency: string };
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Fields>();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      fetch(`/api/strapi?total=${amount}&currency=${currency.currency}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    } catch (err) {
      alert(`Error:${err}`);
    }
  }, [amount, currency.currency]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/success?amount=${amount}&currency=${currency.currency}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <Container>
      <Image src={donut} alt={""} />
      {!clientSecret || !stripe || !elements ? (
        <div>
          <div role="status">
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <Header>CHECKOUT</Header>
          <Grid>
            <form onSubmit={onSubmit}>
              <SubHeader>Contact information</SubHeader>

              <Input
                label={"First Name"}
                register={register}
                params={{
                  required: true,
                }}
                registerKey="firstName"
              />
              <Input
                label={"Last Name"}
                register={register}
                params={{
                  required: true,
                }}
                registerKey="lastName"
              />
              <Input
                register={register}
                params={{
                  required: true,
                }}
                registerKey="phone"
                label={"Phone number"}
                placeholder="Enter you number"
                description="We need your phone number to contact you about the consultation.
Please make sure you are available on WhatsApp, Telegram, or Viber"
              />
              <Input
                register={register}
                params={{
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                }}
                registerKey="email"
                label={"Email address"}
                placeholder="Enter your email"
                description="We need your email to send your order in PDF format"
              />
              {clientSecret && <PaymentElement />}

              {errorMessage && <div>{errorMessage}</div>}

              <Button
                theme="pay"
                disabled={!stripe || loading}
                style={{ marginTop: 20 }}
              >
                {!loading ? `pay now` : "Processing..."}
              </Button>
            </form>
            <OrderWrapper>
              <SubHeader style={{ margin: "0 0 16px" }}>your order</SubHeader>
              <Order bgColor="--main-color" />
            </OrderWrapper>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default CheckoutPage;