"use client";

import styled from "@emotion/styled";

export const Item = styled.article`
  border-bottom: 1px solid var(--dark-gray);
  padding-block: 18px;
  display: grid;
  grid-template-columns: repeat(2, 480px);
  grid-template-rows: 1fr;
  justify-content: space-between;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 420px);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 375px);
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
`;

export const Header = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  > h3 {
    font-family: "Montserrat";
    font-size: 24px;
    font-weight: 400;
    line-height: 29.26px;

    @media (max-width: 768px) {
      color: var(--main-color);
      font-size: 20px;
      line-height: 20px;
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
  font-weight: 400;
  line-height: 22.66px;
  @media (max-width: 768px) {
    color: var(--main-color);
    font-size: 14px;
    line-height: 19.82px;
  }
`;
