import React, { FC } from "react";
import { Wrapper, Card, Header, Text, Letter } from "./style";

interface AboutCardProps {
  header: string;
  text: string;
}

const AboutCard: FC<AboutCardProps> = ({ header, text }) => {
  return (
    <Card>
      <Wrapper>
        <Letter>{header[0] || ""}</Letter>
        <Header>{header}</Header>
      </Wrapper>
      <Text>{text}</Text>
    </Card>
  );
};

export default AboutCard;
