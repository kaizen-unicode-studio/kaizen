import React from "react";
import { Header, StyledHero, TextSection, Text, ImageSection } from "./style";
import Image from "next/image";
import hero_1 from "@/../public/hero_1.png";
import hero_2 from "@/../public/hero_2.png";

const Hero = () => {
  return (
    <StyledHero>
      <TextSection>
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
      </TextSection>
      <ImageSection>
        <Image src={hero_1} alt={""} />
        <Image src={hero_2} alt={""} />
      </ImageSection>
    </StyledHero>
  );
};

export default Hero;
