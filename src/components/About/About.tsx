import React from "react";
import { Grid, Header, StyledAbout, Text } from "./style";
import AboutCard from "../AboutCard";

const About = () => {
  return (
    <StyledAbout>
      <Header>ABOUT THE PROJECT</Header>
      <Text>
        Discover a new path to wellness with Kaizen. Through expert nutrition
        guidance and mindful eating practices, we support your journey towards
        better health — one step at a time, always striving for improvement.
      </Text>
      <Grid>
        <AboutCard
          header={"KNOWLEDGE"}
          text={
            " We provide you with essential information and insights to make informed dietary choices"
          }
        ></AboutCard>
        <AboutCard
          header={"ACHIEVEMENT"}
          text={
            "Our goal is to assist you in reaching your personal health and fitness milestones."
          }
        ></AboutCard>
        <AboutCard
          header={"INSPIRATION"}
          text={
            "We provide the support you need to stay committed to your wellness journey."
          }
        ></AboutCard>
        <AboutCard
          header={"ZEAL"}
          text={
            "We nurture a passionate and enthusiastic approach to maintaining healthy habits."
          }
        ></AboutCard>
        <AboutCard
          header={"EMPOWERMENT"}
          text={
            "We empower you to take control of your health and well-being with confidence."
          }
        ></AboutCard>
        <AboutCard
          header={"NURTURE"}
          text={
            "Providing ongoing support and guidance to foster your growth and success."
          }
        ></AboutCard>
      </Grid>
    </StyledAbout>
  );
};

export default About;
