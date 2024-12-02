"use client";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--light-gray);
  padding: 18px 15px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: ${({ isExpanded }: { isExpanded: boolean }) =>
    isExpanded ? "20px" : "0"};
  transition: padding 0.2s linear;

  @media (max-width: 520px) {
    padding: 18px 0;
  }
  @media (max-width: 375px) {
    padding: 14px 0;
  }
`;

export const Header = styled.h3`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  font-weight: 500;
  line-height: 29.26px;

  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 1.1;
  }
`;

export const Content = styled.div`
  max-height: ${({
    isExpanded,
    heightProp,
  }: {
    isExpanded: boolean;
    heightProp: `${number}px`;
  }) => (isExpanded ? heightProp : "0")};
  transition: max-height 0.1s linear;
  padding-inline: 10px;
  overflow: hidden;

  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;

  > ul + li {
    list-style: square inside;
  }
`;

export const Icon = styled.span`
  transform: ${({ isExpanded }: { isExpanded: boolean }) =>
    isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.2s linear;

  @media (max-width: 375px) {
    width: 32px;
    height: 32px;
  }
`;

export const List = styled.ul`
  padding-block: 10px;

  list-style-type: disc;
  margin: 0;
  padding-left: 20px;
  color: #333;

  li {
    margin-bottom: 5px;
  }
`;
