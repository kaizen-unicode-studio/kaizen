"use client";

import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import {
  Container,
  TextSection,
  TopHeader,
  Text,
  SubHeader,
  Description,
  Afterword,
} from "./style";

const page = () => {
  const params = useSearchParams();

  useEffect(() => {
    fetch(`/api/payment_meta?${params.toString()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <div style={{ background: "var(--main-color)" }}>
      <Header />
      <div
        style={{
          background: "var(--violet-dark)",
          borderBottomRightRadius: 24,
          borderBottomLeftRadius: 24,
        }}
      >
        <TextSection>
          <TopHeader>
            KAI<span>ZEN</span>
          </TopHeader>
          <Text>
            Improving your health through mindful choices is at the heart of our
            philosophy, where zest for life grows by prioritizing nutrition.
            Elevate your well-being with our holistic approach, nurturing your
            body and soul through the principles of lifelong improvement.
            Transform yourself with Kaizen.
          </Text>
        </TextSection>
      </div>
      <Container>
        <article>
          <SubHeader>Thank you for purchasing our service!</SubHeader>
          <Description>
            We are glad that you have decided to take a step towards improving
            your health and well-being. Our specialist will contact you shortly
            to begin working on your request.
          </Description>
          <Afterword>
            If you have any questions, do not hesitate to contact us - we are
            here to support you on your journey to your best well-being!
          </Afterword>
        </article>
      </Container>
      <Footer />
    </div>
  );
};

export default page;
