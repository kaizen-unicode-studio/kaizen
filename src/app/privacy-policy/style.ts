"use client";

import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1180px;
  width: 100%;
  margin-inline: auto;
  margin-block: 64px 120px;
  position: relative;

  @media (max-width: 1180px) {
    padding-inline: 80px;
  }

  @media (max-width: 768px) {
    padding-inline: 16px;
    margin-block: 40px;
  }

  @media (max-width: 375px) {
    padding-inline: 10px;
  }

  > .first_cover {
    position: absolute;
    top: 122px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -10;

    @media (max-width: 768px) {
      top: 281px;
    }
  }
`;

export const SectionHeader = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 2;

  @media (max-width: 768px) {
    border-bottom: 1px solid var(--light-gray);
  }
`;
