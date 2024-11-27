"use client";

import styled from "@emotion/styled";

export const Total = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-block: 1px solid var(--extra-light-gray);
  padding: 16px;
  margin-block: 24px;

  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  color: var(--violet-primary);
`;

export const Overflow = styled.div`
  overflow-y: auto;
  max-height: 80vh;
  margin-block: 12px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
