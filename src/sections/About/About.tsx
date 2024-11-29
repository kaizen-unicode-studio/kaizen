import {
  Afterword,
  Grid,
  Header,
  MobileText,
  StyledAbout,
  Text,
} from "./style";
import AboutCard from "@/components/AboutCard";
import Image from "next/image";
import donut from "/public/covers/donut.svg";

const About = () => {
  return (
    <StyledAbout id="about">
      <Image src={donut} alt={""} />
      <Header>ABOUT THE PROJECT</Header>
      <Text>
        Discover a new path to wellness with Kaizen. Through expert nutrition
        guidance and mindful eating
        <br /> practices, we support your journey towards better health — one
        step at a time, always striving for improvement.
      </Text>
      <MobileText>
        Welcome to Kaizen, your trusted partner on the journey to a healthier,
        more fulfilling life. <br /> We are dedicated to helping you thrive
        through tailored <br /> nutrition and mindful eating practices.
      </MobileText>
      <Grid>
        <AboutCard
          header={"KNOWLEDGE"}
          text={
            " We provide you with essential information and insights to make informed dietary choices"
          }
          img="/images/about/1-main.webp"
        ></AboutCard>
        <AboutCard
          header={"ACHIEVEMENT"}
          text={
            "Our goal is to assist you in reaching your personal health and fitness milestones."
          }
          img="/images/about/2.webp"
        ></AboutCard>
        <AboutCard
          header={"INSPIRATION"}
          text={
            "We provide the support you need to stay committed to your wellness journey."
          }
          img="/images/about/3.webp"
        ></AboutCard>
        <AboutCard
          header={"ZEAL"}
          text={
            "We nurture a passionate and enthusiastic approach to maintaining healthy habits."
          }
          img="/images/about/4.webp"
        ></AboutCard>
        <AboutCard
          header={"EMPOWERMENT"}
          text={
            "We empower you to take control of your health and well-being with confidence."
          }
          img="/images/about/5.webp"
        ></AboutCard>
        <AboutCard
          header={"NURTURE"}
          text={
            "Providing ongoing support and guidance to foster your growth and success."
          }
          img="/images/about/6.webp"
        ></AboutCard>
      </Grid>
      <Afterword>
        Our approach is rooted in the philosophy behind our name, reflecting our
        commitment to continuous improvement. Here’s how we aim to support your
        journey
      </Afterword>
    </StyledAbout>
  );
};

export default About;
