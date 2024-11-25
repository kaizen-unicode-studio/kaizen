"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Container, Grid, Header, SubHeader } from "./Style";
import Button from "@/components/Button";
import Input from "@/components/Input";

const CheckoutPage = ({
  amount,
  currency,
}: {
  amount: number;
  currency: { symbol: string; currency: string };
}) => {
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
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
      {!clientSecret || !stripe || !elements ? (
        <div>
          <div role="status">
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <Header>CHECKOUT</Header>
          <SubHeader>Contact information</SubHeader>
          <Grid>
            <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
              <Input label={"First Name"} />
              <Input label={"Last Name"} />
              <Input
                label={"Phone number"}
                placeholder="Enter you number"
                description="We need your phone number to contact you about the consultation.
Please make sure you are available on WhatsApp, Telegram, or Viber"
              />
              <Input
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
                {!loading ? `Pay now` : "Processing..."}
              </Button>
            </form>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default CheckoutPage;
