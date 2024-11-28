"use client";

import styled from "@emotion/styled";

export const Container = styled.section`
  max-width: 1180px;
  width: 100%;
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  gap: 24px;
  margin-inline: auto;
  margin-block: 64px;
  position: relative;

  @media (max-width: 1180px) {
    padding-inline: 16px;
  }

  @media (max-width: 768px) {
    grid-template: repeat(2, auto) / auto;
  }

  > article {
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 10;
  }

  > img {
    width: 100%;
    height: 318px;
    object-fit: cover;
    object-position: right center;
    border-radius: 12px;
    z-index: 10;
  }

  > .cover_img {
    position: absolute;
    top: 114px;
    left: 523px;
    z-index: 0;

    width: 340px;
    height: 387px;

    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export const SubHeader = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: 29.26px;
  font-variant: small-caps;
`;

export const Afterword = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  max-width: 1180px;
  margin-inline: auto;
  margin-bottom: 120px;

  @media (max-width: 1180px) {
    padding-inline: 16px;
    margin-bottom: 0;
  }
`;
