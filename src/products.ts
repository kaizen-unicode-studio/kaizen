export interface IProduct {
  id: number;
  name: string;
  description: string;
  amount: number;
}

export const products: IProduct[] = [
  {
    id: 1,
    amount: 60,
    name: "PERSONALIZED NUTRITION PLAN",
    description:
      "We offer personalized nutrition plans, advice and support so you can achieve your health and fitness goals. Find out more about how proper food can brighten up your life!",
  },
  {
    id: 2,
    amount: 170,
    name: "INDIVIDUALIZED MONTHLY NUTRITIONIST SUPPORT",
    description:
      "This is a comprehensive service that will transform your perception of nutrition and your overall understanding of a healthy lifestyle.",
  },
  {
    id: 3,
    amount: 30,
    name: "14-DAY BALANCED MEAL PLAN",
    description:
      "This 14-day balanced meal plan will help you fill your body with nutrients, improve your well-being and keep you energized throughout the day.",
  },
  {
    id: 4,
    amount: 30,
    name: "NUTRIENT-RICH BREAKFASTS COLLECTION",
    description:
      "Start your day right! This collection contains recipes that will energize you, provide you with important vitamins and minerals, and support your health throughout the day.",
  },
  {
    id: 5,
    amount: 30,
    name: "VEGAN BLISS: NUTRITIOUS & FLAVORFUL CREATIONS",
    description:
      "We offer a variety of recipes that combine great taste and high nutrition without using animal products.",
  },
];
