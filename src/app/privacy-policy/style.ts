"use client";

import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1180px;
  width: 100%;
  padding-inline: 80px;
  margin-inline: auto;
  margin-block: 64px 120px;

  @media (max-width: 768px) {
    padding-inline: 16px;
    margin-block: 40px;
  }
  @media (max-width: 375px) {
    padding-inline: 10px;
  }
`;

export const SectionHeader = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.6;

  @media (max-width: 768px) {
    border-bottom: 1px solid var(--light-gray);
  }
`;
