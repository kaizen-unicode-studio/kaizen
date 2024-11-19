"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import {
  Container,
  Content,
  Header,
  Grid,
  Description,
  HeaderWrapper,
  Overlay,
  ButtonsWrapper,
} from "./style";
import Image from "next/image";
import plus from "/public/icons/plus.svg";
import services_1 from "/public/covers/services_1.jpeg";
import NavButton from "../NavButton";
import Button from "../Button";

interface ExpandCardProps {
  title?: string;
  children: ReactNode;
  description?: string;
  number?: number;
}

const ExpandCard: FC<ExpandCardProps> = ({
  title,
  children,
  description,
  number,
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
    <Container>
      <Overlay img={services_1}>
        <Grid blur={!isExpanded}>
          <HeaderWrapper>
            /00{number}
            <Header hidden={isExpanded}>{title}</Header>
          </HeaderWrapper>

          <Button hidden={isExpanded} onClick={handleToggle}>
            SHOW MORE
            <Image src={plus} alt={""} />
          </Button>
          <Description hidden={!isExpanded}>{description}</Description>
        </Grid>
      </Overlay>
      <Content
        ref={contentRef}
        height={`${contentHeight + 50}px`}
        isExpanded={isExpanded}
      >
        {children}

        <ButtonsWrapper>
          <NavButton rotate={45} image="increment" onClick={handleToggle} />
          <Button theme="dark">
            GET IT NOW
            <Image src={plus} alt={""} />
          </Button>
        </ButtonsWrapper>
      </Content>
    </Container>
  );
};

export default ExpandCard;
