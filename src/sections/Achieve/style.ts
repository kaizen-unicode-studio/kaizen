"use client";

import styled from "@emotion/styled";

export const StyledAchieve = styled.section`
  margin-top: 72px;
  max-width: 1180px;
  margin-inline: auto;

  @media (max-width: 1440px) {
    max-width: 1020px;
  }

  @media (max-width: 1080px) {
    padding-inline: 16px;
  }
`;

export const Header = styled.h2`
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 29.26px;
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: 16px;
    padding-bottom: 8px;
  }
`;