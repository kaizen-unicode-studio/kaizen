"use client";

import styled from "@emotion/styled";

export const StyledContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  margin-bottom: 36px;
  border-bottom: 1px solid var(--light-gray);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.h2`
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;
`;

export const Amount = styled.span`
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;
  color: var(--violet-primary);
`;
