import React from "react";
import {
  Container,
  Cover,
  Header,
  Japanese,
  Quote,
  StyledKaizen,
  Text,
} from "./style";
import Image from "next/image";
import kaizen from "/public/images/kaizen.jpeg";
import kaizen_cover from "/public/covers/kaizen_cover.svg";

const Kaizen = () => {
  return (
    <StyledKaizen>
      <Cover>
        <Image src={kaizen_cover} alt={""} />
      </Cover>
      <Container>
        <Header>
          KAI<span>ZEN</span>
        </Header>
        <Quote>“ Kaizen wa isshō ”</Quote>
        <Japanese>改善は一生</Japanese>
        <Text>
          Improvement is a lifelong process. Guided by this belief, we inspire
          lasting health through small, meaningful changes that grow over time.
        </Text>
      </Container>
      <Image src={kaizen} alt={""} />
    </StyledKaizen>
  );
};

export default Kaizen;
