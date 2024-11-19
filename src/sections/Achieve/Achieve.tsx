import { Header, StyledAchieve } from "./style";
import achieve_1 from "/public/icons/achieve_1.svg";
import achieve_2 from "/public/icons/achieve_2.svg";
import achieve_3 from "/public/icons/achieve_3.svg";
import achieve_4 from "/public/icons/achieve_4.svg";
import achieve_5 from "/public/icons/achieve_5.svg";
import AchieveItem from "@/components/AchieveItem";

const Achieve = () => {
  return (
    <StyledAchieve>
      <Header>WHAT YOU WILL ACHIEVE</Header>
      <AchieveItem
        image={achieve_1}
        header="A HEALTHIER, MORE ENERGIZED YOU"
        text="Experience a boost in energy and vitality as you nourish your body with the right foods. Say goodbye to fatigue and hello to a more vibrant life."
      />
      <AchieveItem
        image={achieve_2}
        header={"SUSTAINABLE WEIGHT LOSS & BODY CONFIDENCE"}
        text={
          "Reach your ideal weight and maintain it effortlessly, without crash diets or restrictive eating. Feel confident in your body as you enjoy steady, sustainable results."
        }
      />
      <AchieveItem
        image={achieve_3}
        header={"BETTER MENTAL CLARITY AND FOCUS"}
        text={
          "Fuel your brain with the nutrients it needs to enhance focus, productivity, and mental clarity. Whether at work or in your personal life, you’ll feel sharper and more capable."
        }
      />
      <AchieveItem
        image={achieve_4}
        header={"IMPROVED DIGESTION AND OVERALL WELLNESS"}
        text={
          "Enjoy smoother digestion and a stronger immune system as you make healthier food choices. Say goodbye to discomfort and hello to a well-functioning body."
        }
      />
      <AchieveItem
        image={achieve_5}
        header={"A CLEAR PATH TO YOUR HEALTH GOALS"}
        text={
          "No more guesswork or confusion about what works for you. With a clear, step-by-step plan in hand, you’ll achieve your health goals with confidence and clarity."
        }
      />
    </StyledAchieve>
  );
};

export default Achieve;
