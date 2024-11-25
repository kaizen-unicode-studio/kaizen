"use client";

import styled from "@emotion/styled";

export const Card = styled.div`
  background: ${(props: { var?: string }) => `var(${props.var})`};
  padding: 16px;
`;

export const Header = styled.h6`
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Amount = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  color: var(--violet-primary);
`;

export const Description = styled.p`
  font-family: Cantarell;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.99px;
  width: 50%;
`;
