"use client";

import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-family: Cantarell;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;
  color: var(--black);

  > p {
    font-family: Cantarell;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.99px;
    color: var(--light-gray);
  }
`;

export const StyledInput = styled.input`
  padding: 12px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid var(--light-gray);
  transition: border 0.15s ease;
  margin-top: 8px;

  ::placeholder {
    font-family: Cantarell;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.82px;
    color: var(--light-gray);
  }
`;
