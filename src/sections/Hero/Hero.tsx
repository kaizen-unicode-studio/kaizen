import {
  Header,
  StyledHero,
  TextSection,
  Text,
  ImageSection,
  Container,
} from "./style";
import Image from "next/image";
import hero_1 from "/public/images/hero_1.jpeg";
import hero_2 from "/public/images/hero_2.webp";

const Hero = () => {
  return (
    <StyledHero>
      <Container>
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
          <Image src={hero_1} alt={"Founder"} priority fetchPriority="high" />
          <Image
            src={hero_2}
            alt={"Fruit on table"}
            priority
            fetchPriority="high"
            quality={50}
          />
        </ImageSection>
        <Text>
          IMPROVING YOUR HEALTH THROUGH MINDFUL CHOICES IS AT THE HEART OF OUR
          PHILOSOPHY, WHERE ZEST FOR LIFE GROWS BY PRIORITIZING NUTRITION.
          ELEVATE YOUR WELL-BEING WITH OUR HOLISTIC APPROACH, NURTURING YOUR
          BODY AND SOUL THROUGH THE PRINCIPLES OF LIFELONG IMPROVEMENT.
          TRANSFORM YOURSELF WITH KAIZEN.
        </Text>
      </Container>
    </StyledHero>
  );
};

export default Hero;
