"use client";

import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  margin-top: 118px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding-block: 72px;
  width: 100%;
  background: var(--black);
  color: var(--main-color);
`;

export const Container = styled.section`
  max-width: 1180px;
  margin-inline: auto;
`;

export const Section = styled.section`
  color: var(--main-color);
  display: flex;
  flex-direction: column;
  gap: 24;
`;
export const SubHeader = styled.h5`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 6px;
`;

export const Item = styled.p`
  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  margin: 12px 0;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  cursor: pointer;
`;

export const Header = styled.h4`
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 21px;
`;

export const Grid = styled.article`
  display: grid;
  grid-template: 2fr / 265px repeat(3, 1fr);
  gap: 80px;
`;
