"use client";

import styled from "@emotion/styled";

export const StyledQuestions = styled.section`
  margin-top: 74px;
  max-width: 1180px;
  margin-inline: auto;
  margin-bottom: 118px;

  @media (max-width: 1440px) {
    max-width: 1020px;
  }

  @media (max-width: 1180px) {
    padding-inline: 16px;
  }

  @media (max-width: 375px) {
    margin-top: 50px;
  }

  ol {
    overflow: auto;
    padding-inline: 24px;
  }

  li {
    list-style: decimal;
  }
`;

export const Header = styled.h2`
  font-size: 27px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 16px;

  @media (max-width: 520px) {
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 8px;
  }
  @media (max-width: 375px) {
    font-size: 21px;
    line-height: 35px;
    padding-bottom: 2px;
  }
`;

export const SmallCaps = styled.span`
  font-variant: small-caps;
`;
