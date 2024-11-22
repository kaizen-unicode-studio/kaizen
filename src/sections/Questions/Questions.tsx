import React from "react";
import { Header, SmallCaps, StyledQuestions } from "./style";
import Expand from "@/components/Expand";

const Questions = () => {
  return (
    <StyledQuestions>
      <Header>FAQ</Header>
      <Expand
        title={
          <SmallCaps>
            how does the "Personal NUTRITION Plan" service work
          </SmallCaps>
        }
      >
        <ol>
          <li>Submit Your Request and Make Payment.</li>
          <li>
            Schedule Your Consultation: We will contact you within 24 hours to
            arrange a consultation time. You'll also receive a briefing form to
            fill out, providing essential information to begin working with you.{" "}
          </li>
          <li>
            Consultation with a Nutritionist: Engage in a 90-minute consultation
            with a nutritionist. During this session, the nutritionist will
            provide personalized advice and an action plan tailored specifically
            to your needs, empowering you to develop sustainable nutritional
            habits that significantly enhance your health and well-being.
          </li>
        </ol>
      </Expand>
      <Expand
        title={
          <SmallCaps>
            how does the "
            <span>Individualized Monthly NutriTionist Support</span>" service
            work
          </SmallCaps>
        }
      >
        <ol>
          <li>Submit Your Request and Make Payment.</li>
          <li>
            Schedule Your Consultation: We will contact you within 24 hours to
            arrange a consultation time. You'll also receive a briefing form to
            fill out, providing essential information to begin working with you.
          </li>
          <li>
            Consultation with a Nutritionist: Participate in a 60-minute
            consultation with a nutritionist. During this session, we'll delve
            into your current dietary challenges and goals, and develop a
            monthly action plan.
          </li>
        </ol>
      </Expand>
      <Expand title={<SmallCaps>How will I receive the meal plans?</SmallCaps>}>
        You will receive the meal plans via email.
      </Expand>
      <Expand
        title={
          <SmallCaps>
            how many meals should i have in a day/how often should i eat?
          </SmallCaps>
        }
      >
        The meal plan is developed specifically for each person during the
        Individualized Monthly Nutrition Support. Therefore, the number of meals
        can range from 2 to 5, depending on individual characteristics and
        health condition.
      </Expand>
      <Expand title={<SmallCaps>will i have cheat meals?</SmallCaps>}>
        There will be no prohibitions on cheat meals, but you will learn to
        listen to your body and gradually minimize their quantity over time.
      </Expand>
      <Expand
        title={
          <SmallCaps>
            are there any contraindications for those with allergies?
          </SmallCaps>
        }
      >
        During the Individualized Monthly Nutrition Support, your meal plan will
        be created with consideration of your health condition, including
        allergens (such as lactose intolerance, gluten, nuts, etc.).
      </Expand>
      <Expand
        title={
          <SmallCaps>do i need kitchen scales for meal planning?</SmallCaps>
        }
      >
        Having kitchen scales is not mandatory; they can be substituted with a
        tablespoon. However, if you have the opportunity to purchase scales, it
        will save you a lot of time.
      </Expand>
    </StyledQuestions>
  );
};

export default Questions;
