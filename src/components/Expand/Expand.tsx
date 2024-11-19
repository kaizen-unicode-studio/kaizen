"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import NavButton from "../NavButton";
import { Container, Content, Header, Icon, List } from "./style";

interface ExpandProps {
  title: string;
  children: ReactNode;
}

const Expand: FC<ExpandProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(1000);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [contentRef]);

  return (
    <Container>
      <Header onClick={handleToggle}>
        {title}
        <Icon isExpanded={isExpanded}>
          <NavButton image={isExpanded ? "decrement" : "increment"} />
        </Icon>
      </Header>
      <Content
        ref={contentRef}
        height={`${contentHeight}px`}
        isExpanded={isExpanded}
      >
        <List>{children}</List>
      </Content>
    </Container>
  );
};

export default Expand;
