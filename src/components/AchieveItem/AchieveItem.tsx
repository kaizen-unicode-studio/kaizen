import React, { FC } from "react";
import { Header, Item, Text } from "./style";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface AchieveItemProps {
  image: string | StaticImport;
  header: string;
  text: string;
}

const AchieveItem: FC<AchieveItemProps> = ({ image, header, text }) => {
  return (
    <Item>
      <Header>
        <Image src={image} alt={""} />
        <h3>{header}</h3>
      </Header>
      <Text>{text}</Text>
    </Item>
  );
};

export default AchieveItem;
