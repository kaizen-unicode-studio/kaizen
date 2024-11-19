"use client";

import styled from "@emotion/styled";

export const StyledAbout = styled.section`
  max-width: 1180px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 64px;

  @media (max-width: 1440px) {
    max-width: 1020px;
  }
  @media (max-width: 1080px) {
    padding: 0 16px;
  }

  @media (max-width: 375px) {
    gap: 16px;
  }
`;

export const Header = styled.h2`
  color: var(--black);
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;

  @media (max-width: 375px) {
    font-size: 24px;
    border-bottom: 1px solid var(--light-gray);
  }
`;

export const Text = styled.p`
  color: var(--black);
  font-variant: small-caps;
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 300;
  line-height: 29.26px;
  width: 477px;

  @media (max-width: 520px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;
export const MobileText = styled.p`
  display: none;
  @media (max-width: 375px) {
    font-variant: small-caps;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 300;
    line-height: 24.38px;
    display: block;
  }
`;

export const Afterword = styled.p`
  display: none;

  @media (max-width: 375px) {
    font-family: "Cantarell";
    font-size: 16px;
    font-weight: 400;
    line-height: 22.66px;
    display: block;
  }
`;

export const Grid = styled.article`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2s, 1fr);

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (max-width: 520px) {
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
