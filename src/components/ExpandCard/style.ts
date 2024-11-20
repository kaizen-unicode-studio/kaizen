"use client";
import styled from "@emotion/styled";
import { StaticImageData } from "next/image";

export const Container = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  margin-bottom: 50px;
  /* border-bottom: 1px solid var(--light-gray); */
`;

export const Overlay = styled.div`
  background-image: ${({ img }: { img: StaticImageData }) => `url(${img.src})`};
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
`;

export const Grid = styled.article`
  display: grid;
  padding: 24px;
  height: 180px;
  background-color: ${({ blur }: { blur: boolean }) =>
    blur ? "rgba(0, 0, 0, 0.4)" : ""};
  transition: background-color 0.2s linear;
  grid-template-columns: 520px 480px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--main-color);
`;

export const Header = styled.h3`
  padding: 10px;
  display: ${({ hidden }: { hidden?: boolean }) => (hidden ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: var(--main-color);
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 500;
  line-height: 29.26px;
  max-width: 380px;
`;

export const Content = styled.div`
  max-height: ${({
    isExpanded,
    height,
  }: {
    isExpanded: boolean;
    height: number;
  }) => (isExpanded ? `${height}px` : "0")};
  overflow: hidden;
  transition: max-height 0.3s linear, padding 0.2s linear;
  color: var(--black);
  padding: ${({ isExpanded }: { isExpanded: boolean }) =>
    isExpanded ? "16px 60px 24px" : "0 60px 0"};

  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;

  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  color: var(--main-color);
  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;
  display: ${({ hidden }: { hidden?: boolean }) => (hidden ? "none" : "block")};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  gap: 8px;
`;
