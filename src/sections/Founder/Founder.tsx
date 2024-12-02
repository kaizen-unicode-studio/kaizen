import React from "react";
import {
  Card,
  Container,
  FounderContainer,
  FounderImage,
  FounderName,
  Header,
  MobileText,
  Quote,
  StyledFounder,
  Text,
} from "./style";
import Image from "next/image";
import founder from "/public/images/founder.jpeg";
import achieve_1 from "/public/icons/achieve_1.svg";
import achieve_2 from "/public/icons/achieve_2.svg";

const Founder = () => {
  return (
    <StyledFounder>
      <Header>ABOUT FOUNDER</Header>
      <MobileText>
        at kaizen project, we provide customized nutrition plans to help you
        achieve sustainable wellness and a positive relationship with food.
      </MobileText>
      <Container>
        <Quote>
          <Image src={achieve_1} alt={"Icon"} />
          <Card>
            At Kaizen Project, we provide customized nutrition plans to help you
            achieve sustainable wellness and a positive relationship with food.
            Our mission is to offer personalized support that fits seamlessly
            into your lifestyle, focusing on long-term results rather than quick
            fixes. With a deep understanding of nutrition, food safety, and
            dietary supplements, our approach ensures you receive well-rounded,
            expert guidance. We’re committed to helping you stay on track,
            making small, meaningful changes that add up to big improvements.
            Begin your journey toward better health with us.
          </Card>
          <Card>Yulia Dantes</Card>
          <Image src={achieve_2} alt={"Icon"} />
        </Quote>
        <FounderContainer>
          <FounderImage>
            <Image src={founder} alt={"Founder"} />
            <Text>
              Our mission is to offer personalized support that fits seamlessly
              into your lifestyle, focusing on long-term results rather than
              quick fixes. With a deep understanding of nutrition, food safety,
              and dietary supplements, our approach ensures you receive
              well-rounded, expert guidance. We’re committed to helping you stay
              on track, making small, meaningful changes that add up to big
              improvements. Begin your journey toward better health with us.
            </Text>
          </FounderImage>
          <FounderName>Yulia Dantes</FounderName>
        </FounderContainer>
      </Container>
    </StyledFounder>
  );
};

export default Founder;
