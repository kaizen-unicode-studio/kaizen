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
import { Property } from "csstype";

interface ExpandCardProps {
  title: string;
  children: ReactNode;
  description: string;
  number: number;
  image: StaticImageData;
  position?: Property.BackgroundPosition;
}

const ExpandCard: FC<ExpandCardProps> = ({
  title,
  children,
  description,
  number,
  image,
  position,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(1000);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isProductInStorage, setIsProductInStorage] = useState(false);

  useEffect(() => {
    const handleCheckStorage = () => {
      const product = products.find((item) => item.id === number)!;
      const storageData: { data: IProduct[] } = JSON.parse(
        localStorage.getItem("basket") || `{"data": []}`
      );

      const isInStorage = storageData.data.find(
        (item) => item.id === product.id
      );

      setIsProductInStorage(!!isInStorage);
    };

    handleCheckStorage();

    window.addEventListener("storage", handleCheckStorage);

    return () => {
      window.removeEventListener("storage", handleCheckStorage);
    };
  });

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const dispatchStorage = (id: number) => {
    const basket: { data: IProduct[] } = JSON.parse(
      localStorage.getItem("basket") || '{"data": []}'
    );
    const product = products.find((item) => item.id === id);
    const isProductInStorage = !!basket.data.find((item) => item.id === id);

    if (!isProductInStorage && product) {
      basket.data.push(product);
      localStorage.setItem("basket", JSON.stringify(basket));
    } else if (isProductInStorage && product) {
      const newBasket = basket.data.filter((item) => item.id !== product.id);
      localStorage.setItem("basket", JSON.stringify({ data: newBasket }));
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [contentRef]);

  return (
    <Container>
      <Overlay
        img={image}
        onClick={() => setIsExpanded(true)}
        position={position || "center"}
      >
        <Grid blur={!isExpanded}>
          <HeaderWrapper>
            <StyledNumber>/00{number}</StyledNumber>
            <Header hidden={isExpanded}>{title}</Header>
          </HeaderWrapper>

          <Button hidden={isExpanded}>
            SHOW MORE
            <Image src={plus} alt={"Plus"} />
          </Button>
          <Description hidden={!isExpanded}>{description}</Description>
        </Grid>
      </Overlay>
      <Content
        ref={contentRef}
        heightProp={contentHeight}
        isExpanded={isExpanded}
      >
        {children}

        <ButtonsWrapper>
          <NavButton rotateProp={45} image="increment" onClick={handleToggle} />
          <Button
            theme="dark"
            onClick={() => {
              dispatchStorage(number);
              window.dispatchEvent(new Event("storage"));
            }}
          >
            {isProductInStorage ? "CANCEL" : "GET IT NOW"}
            <Image
              src={plus}
              alt={"Plus"}
              style={{
                transform: isProductInStorage
                  ? "rotate(45deg)"
                  : "rotate(0deg)",
              }}
            />
          </Button>
        </ButtonsWrapper>
      </Content>
    </Container>
  );
};

export default ExpandCard;
