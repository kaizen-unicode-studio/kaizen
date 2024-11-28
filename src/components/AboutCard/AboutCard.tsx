import { FC } from "react";
import { Wrapper, Card, Header, Text, Letter, Overlay } from "./style";

interface AboutCardProps {
  header: string;
  text: string;
  img: string;
}

const AboutCard: FC<AboutCardProps> = ({ header, text, img }) => {
  return (
    <Card img={img}>
      <Overlay>
        <Wrapper>
          <Letter>{header[0] || ""}</Letter>
          <Header>{header}</Header>
        </Wrapper>
        <Text>{text}</Text>
      </Overlay>
    </Card>
  );
};

export default AboutCard;
