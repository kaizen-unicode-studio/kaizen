"use client";

import styled from "@emotion/styled";
import { FieldError } from "react-hook-form";

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

  .error {
    font-family: Cantarell;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.99px;
    color: red;
  }
`;

export const StyledInput = styled.input`
  padding: 12px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid
    ${({ error }: { error: FieldError | undefined }) =>
      error ? "red" : "var(--light-gray)"};
  transition: border 0.15s ease;
  margin-top: 8px;

  ::placeholder {
    font-family: Cantarell;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.82px;
    color: var(--light-gray);
  }
    
    :focus {
        outline: none;
        border-color: #0570de;
        box-shadow:  0 0 3px 3px rgba(0, 112, 243, 0.25);
    }
`;
