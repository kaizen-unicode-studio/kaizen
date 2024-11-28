"use client";

import styled from "@emotion/styled";

export const Card = styled.div`
  background: ${(props: { var?: string }) => `var(${props.var})`};
  padding: 16px;
  border-radius: 12px;
`;

export const Header = styled.h6`
  font-size: 17px;
  line-height: 1.8;
  letter-spacing: 0.2px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > div {
    display: flex;
  }
`;

export const Amount = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  color: var(--violet-primary);
`;

export const Remove = styled.div`
  cursor: pointer;
  > img {
    margin: 4px;
  }
`;

export const Description = styled.p`
  font-family: Cantarell;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.99px;
  width: 57%;
`;
