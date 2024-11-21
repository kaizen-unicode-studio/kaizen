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
`;

export const Header = styled.h2`
  font-family: "Montserrat";
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
`;

export const ServicesWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 75px;
  display: flex;
  flex-direction: column;
  gap: ${(props: { gap: `${number}px` }) => props.gap};
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
    width: 300px;
  }
`;
