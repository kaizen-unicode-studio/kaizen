import React from "react";
import { Card, Text, Avatar, Customer, Name } from "./style";
import quotes from "/public/icons/quotes.svg";
import customer from "/public/images/customer.jpeg";
import Image from "next/image";

const Slide = () => {
  return (
    <Card>
      <Image src={quotes} alt={""} />
      <Text>
        Working with a nutritionist has completely transformed my approach to
        food and health. The personalized plan was easy to follow, and the
        support I received kept me motivated every step of the way. I feel more
        energized, healthier, and more confident in my choices. Highly recommend
        this experience to anyone looking to improve their well-being!
      </Text>
      <Customer>
        <Avatar>
          <Image src={customer} alt={""} />
          <Name>Customer Name</Name>
        </Avatar>
        <Image src={quotes} alt={""} />
      </Customer>
    </Card>
  );
};

export default Slide;
