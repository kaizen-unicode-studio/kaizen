"use client";

import styled from "@emotion/styled";

export const StyledServices = styled.section`
  padding-top: 64px;
  max-width: 1180px;
  margin-inline: auto;

  @media (max-width: 1440px) {
    max-width: 1020px;
  }

  @media (max-width: 1080px) {
    padding-inline: 16px;
  }

  @media (max-width: 375px) {
    padding-top: 54px;
  }
`;

export const Header = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;

  @media (max-width: 375px) {
    font-size: 21px;
    word-spacing: 1.8px;
    line-height: 16px;
    border-bottom: 1px solid black;
    padding: 10px 0;
  }
`;

export const ServicesWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 75px;
  display: flex;
  flex-direction: column;
  gap: ${(props: { gap: `${number}px` }) => props.gap};

  @media (max-width: 375px) {
    margin-top: 16px;
    gap: 8px;
    margin-bottom: 64px;
  }
`;

export const Separator = styled.div`
  width: 600px;
  height: 1px;
  background: rgb(0, 0, 0);
  margin-inline: auto;
  margin-bottom: 64px;

  @media (max-width: 520px) {
    width: 400px;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;
