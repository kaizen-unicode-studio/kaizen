"use client";
import styled from "@emotion/styled";
import { StaticImageData } from "next/image";

export const Container = styled.div`
  overflow: hidden;
`;

export const Overlay = styled.div`
  background-image: ${({ img }: { img: StaticImageData }) => `url(${img.src})`};
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
`;

export const Grid = styled.article`
  display: grid;
  padding: 24px;
  height: 180px;
  background-color: ${({ blur }: { blur: boolean }) =>
    blur ? "rgba(0, 0, 0, 0.4)" : ""};
  border-radius: 10px;
  transition: background-color 0.2s linear;
  grid-template-columns: 500px 480px;
  justify-content: space-between;
  align-items: center;

  > button {
    justify-self: end;

    @media (max-width: 520px) {
      justify-self: start;
    }
  }

  @media (max-width: 1440px) {
    grid-template-columns: 480px 480px;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 480px 1fr;
  }

  @media (max-width: 520px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    gap: 36px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--main-color);

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const StyledNumber = styled.span``;

export const Header = styled.h3`
  padding: 10px;
  display: ${({ hidden }: { hidden?: boolean }) => (hidden ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: var(--main-color);
  font-size: 19px;
  font-weight: 500;
  line-height: 22.26px;
  max-width: 323px;
  letter-spacing: 1.3px;

  @media (max-width: 520px) {
    padding-inline: 0;
  }
`;

export const Content = styled.div`
  max-height: ${({
    isExpanded,
    height,
  }: {
    isExpanded: boolean;
    height: number;
  }) => (isExpanded ? `${height * 1.8}px` : "0")};
  overflow: hidden;
  transition: max-height 0.3s linear, padding 0.3s linear;
  color: var(--black);
  padding: ${({ isExpanded }: { isExpanded: boolean }) =>
    isExpanded ? "16px 60px 24px" : "0 60px 0"};

  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: ${({ isExpanded }: { isExpanded: boolean }) =>
      isExpanded ? "16px 40px 24px" : "0 40px 0"};
  }
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
