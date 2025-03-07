import { ReactNode } from "react";
import { ServiceID } from "./services";
import { Property } from "csstype";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  amount: number;
  listHeader: string;
  service: ServiceID;
  imagePosition?: Property.BackgroundPosition;
  html: {
    content: ReactNode;
    expand?: { content: ReactNode; title: string }[];
  };
  // attachments?: [
  //   {
  //     filename: string;
  //     path: string;
  //     contentType: "application/pdf";
  //   }
  // ];
  attached_link: string;
}

const origin = "https://kaizenproject.net"; //process.env.NEXT_PUBLIC_URL_ORIGIN;

export const products: IProduct[] = [
  {
    id: 1,
    amount: 0.5, //60
    name: "PERSONALIZED NUTRITION PLAN",
    description:
      "We offer personalized nutrition plans, advice and support so you can achieve your health and fitness goals. Find out more about how proper food can brighten up your life!",
    listHeader: "THE NUTRITION PLAN INCLUDES",
    service: "services",
    imagePosition: "-450px",
    html: {
      content: (
        <>
          <li>
            Discussion with the nutritionist about goals and expectations from
            the consultation.
          </li>
          <li>
            Selection and development of effective tools by the nutritionist.
          </li>
          <li>Receiving a personalized 14 days nutrition plan.</li>
          <li>Free consultation throughout the week following the session.</li>
        </>
      ),
      expand: [
        {
          content: (
            <>
              <li>
                Understanding your body's needs. Knowledge on creating a healthy
                grocery shopping list.
              </li>
              <li>Techniques for reducing cravings for sweets.</li>
              <li>Insights on creating a healthy family meal plan.</li>
              <li>
                Tips for maintaining healthy eating habits while eating out.
              </li>
            </>
          ),
          title: "WHAT WILL YOU ACHIVE",
        },
        {
          content: (
            <>
              <li>
                You have a specific goal (such as weight loss, gain, or
                stabilization), but need guidance on where to begin.
              </li>
              <li>You want to transform your nutrition habits.</li>
              <li>
                You aim to stabilize your hormones through dietary adjustments.
              </li>
            </>
          ),
          title: "THIS CONSULTATION IS RIGHT FOR YOU IF",
        },
      ],
    },
    attached_link:
      "https://docs.google.com/forms/d/e/1FAIpQLSf4Bwghd1vZiFL8ypmbeQcdfCbhdSKSwxOJoejh2uVoUsbghw/viewform?usp=preview",
  },
  {
    id: 2,
    amount: 0.5, //170
    name: "INDIVIDUALIZED MONTHLY NUTRITIONIST SUPPORT",
    description:
      "This is a comprehensive service that will transform your perception of nutrition and your overall understanding of a healthy lifestyle.",
    listHeader: "WHAT IS INCLUDED",
    service: "services",
    html: {
      content: (
        <>
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
        </>
      ),
      expand: [
        {
          title: "WHAT WILL YOU ACHIVE",
          content: (
            <>
              <li>
                Understanding your body's needs. Knowledge on creating a healthy
                grocery shopping list.
              </li>
              <li>Techniques for reducing cravings for sweets.</li>
              <li>Insights on creating a healthy family meal plan.</li>
              <li>
                Tips for maintaining healthy eating habits while eating out.
              </li>
            </>
          ),
        },
        {
          title: "THIS CONSULTATION IS RIGHT FOR YOU IF",
          content: (
            <>
              <li>
                You have a specific goal (such as weight loss, gain, or
                stabilization), but need guidance on where to begin.
              </li>
              <li>You want to transform your nutrition habits.</li>
              <li>
                You aim to stabilize your hormones through dietary adjustments.
              </li>
            </>
          ),
        },
      ],
    },
    attached_link:
      "https://docs.google.com/forms/d/e/1FAIpQLScKdB88Q20b2eIoE0CIVcECkPxdWy5ZgH-mTI_u9hP9VzKUkg/viewform?usp=dialog",
  },
  {
    id: 3,
    amount: 0.5, // 30
    name: "14-DAY BALANCED MEAL PLAN",
    description:
      "This 14-day balanced meal plan will help you fill your body with nutrients, improve your well-being and keep you energized throughout the day.",
    service: "plans",
    listHeader: "",
    imagePosition: "-30px",
    html: {
      content: (
        <>
          Enjoy a diverse range of tasty, nutrient-packed meals designed to keep
          you energized and satisfied. With easy-to-follow recipes for every
          meal, achieving a balanced diet has never been simpler. Start your
          wellness journey today!
        </>
      ),
    },
    attached_link: `${origin}/attachments/14-DAY BALANCED MEAL PLAN.pdf`,
  },
  {
    id: 4,
    amount: 0.5, // 30
    name: "NUTRIENT-RICH BREAKFASTS COLLECTION",
    description:
      "Start your day right! This collection contains recipes that will energize you, provide you with important vitamins and minerals, and support your health throughout the day.",
    service: "plans",
    listHeader: "",
    imagePosition: "-500px",
    html: {
      content: (
        <>
          New Day = New Breakfast. This collection of 20 recipes is perfect for
          those who seek to enjoy a delicious and mindful breakfast that
          nurtures their body.
        </>
      ),
    },
    attached_link: `${origin}/attachments/NUTRIENT-RICH BREAKFASTS COLLECTION.pdf`,
  },
  {
    id: 5,
    amount: 0.5, // 30
    name: "VEGAN BLISS: NUTRITIOUS & FLAVORFUL CREATIONS",
    description:
      "We offer a variety of recipes that combine great taste and high nutrition without using animal products.",
    service: "plans",
    listHeader: "",
    html: {
      content: (
        <>
          Featuring 20 delicious recipes, this assortment offers a perfect blend
          of nutrition and taste. Ideal for both dedicated vegans and those new
          to plant-based meals, these dishes are designed to be both satisfying
          and healthful. Experience blissful eating with every vibrant bite!
        </>
      ),
    },
    attached_link: `${origin}/attachments/EGAN BLISS: NUTRITIOUS & FLAVORFUL CREATIONS.pdf`,
  },
];
