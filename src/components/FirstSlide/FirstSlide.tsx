import React from "react";
import { Card, Title } from "./style";

interface FirstSlideProps {
  small?: boolean;
}

const FirstSlide = ({ small = false }: FirstSlideProps) => {
  return (
    <Card small={small}>
      <Title>
        YOUR RESULTS <br />
        ARE OUR INSPIRATION
      </Title>
    </Card>
  );
};

export default FirstSlide;
