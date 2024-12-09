"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import NavButton from "../NavButton";
import { Container, Content, Header, Icon } from "./style";

interface ExpandProps {
  title: string | ReactNode;
  children: ReactNode;
  wide?: boolean;
  bold?: boolean;
}

const Expand: FC<ExpandProps> = ({
  title,
  children,
  wide = false,
  bold = false,
}) => {
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
    <Container isExpanded={isExpanded} wide={wide}>
      <Header onClick={handleToggle} bold={bold}>
        {title}
        <Icon isExpanded={isExpanded}>
          <NavButton image={isExpanded ? "decrement" : "increment"} />
        </Icon>
      </Header>
      <Content
        ref={contentRef}
        heightProp={`${contentHeight}px`}
        isExpanded={isExpanded}
      >
        {children}
      </Content>
    </Container>
  );
};

export default Expand;
