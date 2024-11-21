import React from "react";
import { Container, Header, Quote, StyledKaizen, Text } from "./style";
import Image from "next/image";
import kaizen from "/public/images/kaizen.jpeg";

const Kaizen = () => {
  return (
    <StyledKaizen>
      <Container>
        <Header>
          KAI<span>ZEN</span>
        </Header>
        <Quote>“ Kaizen wa isshō ”</Quote>
        <Quote>改善は一生</Quote>
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
