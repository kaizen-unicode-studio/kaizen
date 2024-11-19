"use client";

import styled from "@emotion/styled";

export const StyledAbout = styled.section`
  max-width: 1180px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 64px;
`;

export const Header = styled.h2`
  color: var(--dark);
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;
`;

export const Text = styled.p`
  color: var(--dark);
  font-variant: small-caps;
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 300;
  line-height: 29.26px;
  width: 477px;
`;

export const Grid = styled.article`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2s, 1fr);
`;
