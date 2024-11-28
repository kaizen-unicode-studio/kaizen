import React, { FC } from "react";
import { Article, Header, Text } from "./style";

interface TextTabProps {
  header?: string;
  text: string;
}

const TextTab: FC<TextTabProps> = ({ header, text }) => {
  return (
    <Article>
      {header && <Header>{header}</Header>}
      <Text>{text}</Text>
    </Article>
  );
};

export default TextTab;
