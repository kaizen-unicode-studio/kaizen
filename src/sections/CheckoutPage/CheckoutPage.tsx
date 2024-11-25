"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Container, Grid, Header } from "./Style";
import Button from "@/components/Button";

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
          <Grid>
            <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
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
