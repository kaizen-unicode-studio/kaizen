import React from "react";
import { StyledServices, Header } from "./style";
import ExpandCard from "@/components/ExpandCard";
import Expand from "@/components/Expand";
import List from "@/components/List";
import ExpandContent from "@/components/ExpandContent";
import services_1 from "/public/covers/services_1.jpeg";

const Services = () => {
  return (
    <StyledServices>
      <Header>NUTRITION SERVICES</Header>
      <ExpandCard
        image={services_1}
        title={"PERSONALIZED NUTRITION PLAN"}
        description={
          "We offer personalized nutrition plans, advice and support so you can achieve your health and fitness goals. Find out more about how proper food can brighten up your life!"
        }
        number={1}
      >
        <ExpandContent
          header={"PERSONALIZED NUTRITION PLAN"}
          listHeader="THE NUTRITION PLAN INCLUDES"
          amount={70}
        >
          <li>
            Discussion with the nutritionist about goals and expectations from
            the consultation.
          </li>
          <li>
            Selection and development of effective tools by the nutritionist.
          </li>
          <li>Receiving a personalized 14 days nutrition plan.</li>
          <li>Free consultation throughout the week following the session.</li>
        </ExpandContent>
        <Expand title={"WHAT WILL YOU ACHIVE"}>
          <List>
            <li>
              Understanding your body's needs. Knowledge on creating a healthy
              grocery shopping list.
            </li>
            <li>Techniques for reducing cravings for sweets.</li>
            <li>Insights on creating a healthy family meal plan.</li>
            <li>
              Tips for maintaining healthy eating habits while eating out.
            </li>
          </List>
        </Expand>
        <Expand title="THIS CONSULTATION IS RIGHT FOR YOU IF">
          <List>
            <li>
              You have a specific goal (such as weight loss, gain, or
              stabilization), but need guidance on where to begin.
            </li>
            <li>You want to transform your nutrition habits.</li>
            <li>
              You aim to stabilize your hormones through dietary adjustments.
            </li>
          </List>
        </Expand>
      </ExpandCard>
    </StyledServices>
  );
};

export default Services;
