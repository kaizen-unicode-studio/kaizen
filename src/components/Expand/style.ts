"use client";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  margin-bottom: 50px;
  border-bottom: 1px solid var(--light-gray);
`;

export const Header = styled.h3`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 500;
  line-height: 29.26px;
`;

export const Content = styled.div`
  max-height: ${({
    isExpanded,
    height,
  }: {
    isExpanded: boolean;
    height: `${number}px`;
  }) => (isExpanded ? height : "0")};
  overflow: hidden;
  transition: max-height 0.2s linear;
  padding-inline: 10px;

  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;
`;

export const Icon = styled.span`
  transform: ${({ isExpanded }: { isExpanded: boolean }) =>
    isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.2s linear;
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
