"use client";

import styled from "@emotion/styled";

export const StyledQuestions = styled.section`
  margin-top: 74px;
  max-width: 1180px;
  margin-inline: auto;

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
`;

export const SmallCaps = styled.span`
  font-variant: small-caps;
  max-width: 480px;

  > span {
    font-weight: 600;
  }
`;
