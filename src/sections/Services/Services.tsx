import { StyledServices, Header, ServicesWrapper, Separator } from "./style";
import ExpandCard from "@/components/ExpandCard";
import Expand from "@/components/Expand";
import List from "@/components/List";
import ExpandContent from "@/components/ExpandContent";
import services_1 from "/public/covers/services_1.webp";
import services_2 from "/public/covers/services_2.webp";
import services_3 from "/public/covers/services_3.webp";
import services_4 from "/public/covers/services_4.webp";
import services_5 from "/public/covers/services_5.webp";

const Services = () => {
  return (
    <StyledServices id="services">
      <Header>NUTRITION SERVICES</Header>
      <ServicesWrapper gap="18px">
        <ExpandCard
          image={services_1}
          position={"-450px"}
          title={"PERSONALIZED NUTRITION PLAN"}
          description={
            "We offer personalized nutrition plans, advice and support so you can achieve your health and fitness goals. Find out more about how proper food can brighten up your life!"
          }
          number={1}
        >
          <ExpandContent
            header={"PERSONALIZED NUTRITION PLAN"}
            listHeader="THE NUTRITION PLAN INCLUDES"
            price={60}
          >
            <li>
              Discussion with the nutritionist about goals and expectations from
              the consultation.
            </li>
            <li>
              Selection and development of effective tools by the nutritionist.
            </li>
            <li>Receiving a personalized 14 days nutrition plan.</li>
            <li>
              Free consultation throughout the week following the session.
            </li>
          </ExpandContent>
          <Expand wide bold title={"WHAT WILL YOU ACHIVE"}>
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
          <Expand wide bold title="THIS CONSULTATION IS RIGHT FOR YOU IF">
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
        <ExpandCard
          image={services_2}
          title={"INDIVIDUALIZED MONTHLY NUTRICIONIST SUPPORT"}
          description={
            " This is a comprehensive service that will transform your perception of nutrition and your overall understanding of a healthy lifestyle."
          }
          number={2}
        >
          <ExpandContent
            header={"INDIVIDUALIZED MONTHLY NUTRITIONIST SUPPORT"}
            listHeader="WHAT IS INCLUDED"
            price={170}
          >
            <li>
              Calculation of energy expenditure and selection of appropriate
              micronutrients and macronutrients.
            </li>
            <li>
              A balanced diet customized to your taste preferences and goals.
            </li>
            <li>Satisfying, nutritious meals without hunger or setbacks.</li>
            <li>Detailed recommendations and instructions.</li>
            <li>Continuous support and monitoring for four weeks.</li>
            <li>Weekly progress tracking.</li>
            <li>
              Option to extend the program with a 25% discount each subsequent
              month.
            </li>
          </ExpandContent>
          <Expand wide bold title={"WHAT WILL YOU ACHIVE"}>
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
          <Expand wide bold title="THIS CONSULTATION IS RIGHT FOR YOU IF">
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
      </ServicesWrapper>

      <Header>NUTRITION PLANS</Header>
      <ServicesWrapper style={{ marginBottom: 64 }} gap="12px">
        <ExpandCard
          image={services_3}
          position={"-30px"}
          title={"14-DAY BALANCED MEAL PLAN"}
          description={
            "This 14-day balanced meal plan will help you fill your body with nutrients, improve your well-being and keep you energized throughout the day."
          }
          number={3}
        >
          <ExpandContent header={"14-DAY BALANCED MEAL PLAN"} price={30}>
            Enjoy a diverse range of tasty, nutrient-packed meals designed to
            keep you energized and satisfied. With easy-to-follow recipes for
            every meal, achieving a balanced diet has never been simpler. Start
            your wellness journey today!
          </ExpandContent>
        </ExpandCard>
        <ExpandCard
          image={services_4}
          position={"-500px"}
          title={"NUTRIENT-RICH BREAKFASTS COLLECTION"}
          description={
            "Start your day right! This collection contains recipes that will energize you, provide you with important vitamins and minerals, and support your health throughout the day."
          }
          number={4}
        >
          <ExpandContent
            header={"NUTRIENT-RICH BREAKFASTS COLLECTION"}
            price={30}
          >
            New Day = New Breakfast. This collection of 20 recipes is perfect
            for those who seek to enjoy a delicious and mindful breakfast that
            nurtures their body.
          </ExpandContent>
        </ExpandCard>
        <ExpandCard
          image={services_5}
          title={"VEGAN BLISS: NUTRITIOUS & FLAVORFUL CREATIONS"}
          description={
            "We offer a variety of recipes that combine great taste and high nutrition without using animal products."
          }
          number={5}
        >
          <ExpandContent
            header={"VEGAN BLISS: NUTRITIOUS & FLAVORFUL CREATIONS"}
            price={30}
          >
            Featuring 20 delicious recipes, this assortment offers a perfect
            blend of nutrition and taste. Ideal for both dedicated vegans and
            those new to plant-based meals, these dishes are designed to be both
            satisfying and healthful. Experience blissful eating with every
            vibrant bite!
          </ExpandContent>
        </ExpandCard>{" "}
      </ServicesWrapper>
      <Separator />
    </StyledServices>
  );
};

export default Services;
