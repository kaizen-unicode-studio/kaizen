"use client";

import styled from "@emotion/styled";

export const StyledSlider = styled.section`
  width: 100%;
  background: var(--black);
`;

export const SliderContainer = styled.article`
  max-width: 1180px;
  padding-block: 80px 40px;
  margin-inline: auto;
  z-index: 1;

  @media (max-width: 768px) {
    padding-block: 20px 40px;
  }
`;

export const Wrapper = styled.div`
  padding-top: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    padding-inline: 20px;
  }
`;
