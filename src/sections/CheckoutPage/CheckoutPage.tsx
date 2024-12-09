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
import { Container, Grid, Header, OrderWrapper, SubHeader } from "./style1";
import { SubmitHandler, useForm } from "react-hook-form";
import right_arrow from "/public/icons/right_arrow.svg";
import { IProduct } from "@/products";
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
    formState: { errors },
  } = useForm<Fields>();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<{ data: IProduct[] }>({ data: [] });

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

  useEffect(() => {
    if (clientSecret && stripe && elements) {
      const cssLink = document.createElement("link");
      cssLink.href = "./style.css";
      cssLink.rel = "stylesheet";
      cssLink.type = "text/css";
      document.querySelectorAll("iframe").forEach((frame) => {
        if (frame.name.match("__privateStripeFrame")) {
          frame.appendChild(cssLink);
          frame.contentDocument?.head.appendChild(cssLink);
        }
      });
    }
  }, [clientSecret, stripe, elements]);

  const onSubmit: SubmitHandler<Fields> = async (data) => {
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

    const fields = Object.keys(data).map((key) => {
      return `${key}=${data[key as keyof Fields]}&`;
    });

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/success?${fields.join(
          ""
        )}&products=[${items.data.map((item) => item.name).join(", ")}]`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <Container>
      <Image src={donut} alt={"Donut"} priority />
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <SubHeader>Contact information</SubHeader>

              <Input
                label={"First Name"}
                register={register}
                params={{
                  required: true,
                }}
                registerKey="firstName"
                error={{
                  state: errors.firstName,
                  message: "User name is required",
                }}
              />
              <Input
                label={"Last Name"}
                register={register}
                params={{
                  required: true,
                }}
                registerKey="lastName"
                error={{
                  state: errors.lastName,
                  message: "Last name is required",
                }}
              />
              <Input
                register={register}
                params={{
                  required: true,
                  pattern:
                    /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/i,
                }}
                registerKey="phone"
                error={{
                  state: errors.phone,
                  message: "Phone is required",
                }}
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
                error={{ state: errors.email, message: "Email is required" }}
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
                {!loading ? (
                  <>
                    <p>pay now</p>
                    <Image
                      src={right_arrow}
                      alt={"Arrow"}
                      width={20}
                      height={20}
                    />
                  </>
                ) : (
                  "Processing..."
                )}
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
