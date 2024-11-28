import React from "react";
import { Container, Section, Header, Text } from "./style";

const SmallHero = () => {
  return (
    <Section>
      <Container>
        <Header>
          KAI<span>ZEN</span>
        </Header>
        <Text>
          Improving your health through mindful choices is at the heart of our
          philosophy, where zest for life grows by prioritizing nutrition.
          Elevate your well-being with our holistic approach, nurturing your
          body and soul through the principles of lifelong improvement.
          Transform yourself with Kaizen.
        </Text>
      </Container>
    </Section>
  );
};

export default SmallHero;
