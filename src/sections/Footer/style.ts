"use client";

import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding-block: 72px;
  width: 100%;
  background: var(--black);
  color: var(--main-color);

  @media (max-width: 520px) {
    padding-block: 72px 40px;
  }
`;

export const Container = styled.section`
  max-width: 1180px;
  margin-inline: auto;
  @media (max-width: 1180px) {
    padding-inline: 30px;
  }
  @media (max-width: 768px) {
    padding-inline: 16px;
  }
`;

export const Section = styled.section`
  color: var(--main-color);
  display: flex;
  flex-direction: column;
  /* gap: 24px; */

  :nth-child(1) {
    grid-column-start: 2;

    @media (max-width: 978px) {
      grid-column-start: 1;
    }
  }
`;
export const SubHeader = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 6px;

  @media (max-width: 520px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 17px;
  }
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

  > a {
    text-decoration: none;
    color: var(--main-color);
  }
`;

export const Header = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 21px;

  @media (max-width: 520px) {
    font-size: 32px;
  }
  @media (max-width: 375px) {
    font-size: 28px;
  }
`;

export const Grid = styled.article`
  display: grid;
  grid-template: 1fr / 265px repeat(3, 1fr);
  gap: 80px;

  @media (max-width: 1080px) {
    grid-template: 1fr / 200px repeat(3, 1fr);
    gap: 60px;
  }

  @media (max-width: 978px) {
    grid-template: 1fr / repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    gap: 20px;
  }

  @media (max-width: 660px) {
    grid-template: repeat(3, auto) / 1fr;
  }
`;

export const Copy = styled.p`
  margin-top: 40px;
  text-align: center;
`;

export const CopyLink = styled.a`
  color: var(--main-color);
`;
