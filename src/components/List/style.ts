"use client";

import styled from "@emotion/styled";

export const StyledList = styled.ol`
  list-style: square inside url("/icons/square.svg");
  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;
  color: var(--black);
`;

export const Header = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 29.26px;
  margin-bottom: 12px;

  @media (max-width: 520px) {
    font-size: 22px;
  }
`;
