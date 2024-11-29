"use client";

import styled from "@emotion/styled";

export const Item = styled.article`
  border-bottom: 1px solid var(--dark-gray);
  padding-block: 12px;
  display: grid;
  grid-template-columns: repeat(2, 480px);
  grid-template-rows: 1fr;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-bottom: 11px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 420px);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr;
    border-bottom: none;
    border-radius: 12px;
    background: var(--violet-dark);
    margin-top: 8px;
    padding-inline: 12px;
    grid-gap: 8px;
  }
  @media (max-width: 375px) {
    padding-block: 14px 15px;
    margin-top: 0px;
    margin-bottom: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 375px) {
    gap: 12px;
  }

  > h3 {
    font-size: 21px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.4px;
    word-spacing: 1.5px;

    @media (max-width: 768px) {
      color: var(--main-color);
      font-size: 20px;
      line-height: 20px;
    }

    @media (max-width: 375px) {
      font-size: 15px;
      line-height: 1;
      word-spacing: 3px;
      letter-spacing: 1px;
    }
  }

  > img {
    @media (max-width: 768px) {
      width: 44px;
      height: 44px;
      filter: invert(94%) sepia(0%) saturate(15%) hue-rotate(166deg)
        brightness(93%) contrast(88%);
    }
  }
`;

export const Text = styled.p`
  font-family: "Cantarell";
  font-size: 16px;
  padding-top: 8px;
  font-weight: 400;
  line-height: 22.66px;
  text-justify: auto;

  @media (max-width: 768px) {
    color: var(--main-color);
    font-size: 14px;
    line-height: 19.82px;
  }

  @media (max-width: 375px) {
    padding-inline: 8px;
  }
`;
