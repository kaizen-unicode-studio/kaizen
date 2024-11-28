import React, { FC, ReactNode } from "react";
import { Article, Header, Text } from "./style";

interface TextTabProps {
  header?: string;
  text: string | ReactNode;
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
