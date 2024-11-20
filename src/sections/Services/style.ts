"use client";

import styled from "@emotion/styled";

export const StyledServices = styled.section`
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
  margin: 64px 0 20px;
  line-height: 39.01px;
`;
