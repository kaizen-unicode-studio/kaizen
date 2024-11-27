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

export const TextWrapper = styled.section`
  background: var(--violet-dark);
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  padding-inline: 80px;
`;

export const TextSection = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1760px;
  width: 100%;
  margin-inline: auto;

  @media (max-width: 1600px) {
    max-width: 1440px;
  }

  @media (max-width: 520px) {
    padding-inline: 0;
  }

  @media (max-width: 1280px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding-inline: 10px;
  }

  > p {
    display: block;
    @media (max-width: 1280px) {
      display: none;
    }
  }
`;

export const TopHeader = styled.h1`
  color: var(--light-gray);
  font-size: 128px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 41px;

  @media (max-width: 768px) {
    font-size: 80px;
    line-height: 97.5px;
    letter-spacing: 0.16em;
  }

  > span {
    color: var(--extra-light-gray);
    font-weight: 200;
    letter-spacing: 0.16em;
    line-height: 156.03px;

    @media (max-width: 768px) {
      font-size: 80px;
      line-height: 97.52px;
      letter-spacing: 0.02em;
    }
  }
`;

export const Text = styled.p`
  color: var(--main-color);
  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;
  max-width: 480px;
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
