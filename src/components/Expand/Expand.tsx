"use client";
import { useState } from "react";
import NavButton from "../NavButton";
import { Container, Content, Header, Icon, List } from "./style";

const Expand = ({ title, onToggle, children }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    onToggle?.(!isExpanded);
  };

  return (
    <Container>
      <Header onClick={handleToggle}>
        {title}
        <Icon isExpanded={isExpanded}>
          <NavButton image={isExpanded ? "decrement" : "increment"} />
        </Icon>
      </Header>
      <Content isExpanded={isExpanded}>
        <List>{children}</List>
      </Content>
    </Container>
  );
};

export default Expand;
