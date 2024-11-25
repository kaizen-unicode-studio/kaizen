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
  StyledNumber,
} from "./style";
import Image, { StaticImageData } from "next/image";
import plus from "/public/icons/plus.svg";
import NavButton from "../NavButton";
import Button from "../Button";
import { IProduct, products } from "@/products";

interface ExpandCardProps {
  title: string;
  children: ReactNode;
  description: string;
  number: number;
  image: StaticImageData;
}

const ExpandCard: FC<ExpandCardProps> = ({
  title,
  children,
  description,
  number,
  image,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(1000);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const addToLocalStorage = (id: number) => {
    const basket: { data: IProduct[] } = JSON.parse(
      localStorage.getItem("basket") || '{"data": []}'
    );
    const product = products.find((item) => item.id === id);

    if (!basket.data.find((item) => item.id === id) && product) {
      basket.data.push(product);
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [contentRef]);

  return (
    <Container>
      <Overlay img={image} onClick={() => setIsExpanded(true)}>
        <Grid blur={!isExpanded}>
          <HeaderWrapper>
            <StyledNumber>/00{number}</StyledNumber>
            <Header hidden={isExpanded}>{title}</Header>
          </HeaderWrapper>

          <Button hidden={isExpanded}>
            SHOW MORE
            <Image src={plus} alt={""} />
          </Button>
          <Description hidden={!isExpanded}>{description}</Description>
        </Grid>
      </Overlay>
      <Content ref={contentRef} height={contentHeight} isExpanded={isExpanded}>
        {children}

        <ButtonsWrapper>
          <NavButton rotate={45} image="increment" onClick={handleToggle} />
          <Button
            theme="dark"
            onClick={() => {
              addToLocalStorage(number);
            }}
          >
            GET IT NOW
            <Image src={plus} alt={""} />
          </Button>
        </ButtonsWrapper>
      </Content>
    </Container>
  );
};

export default ExpandCard;
