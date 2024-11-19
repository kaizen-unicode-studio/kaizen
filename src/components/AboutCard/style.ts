"use client";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Letter = styled.span`
  opacity: 0.45;
  color: var(--extra-light-gray);
  font-family: "Montserrat";
  font-size: 128px;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: 0.32em;

  @media (max-width: 520px) {
    font-size: 64px;
    line-height: 80px;
    text-align: center;
  }
`;

export const Header = styled.h3`
  position: absolute;
  left: 10px;
  top: 45%;
  color: var(--main-color);
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 600;
  line-height: 29.26px;

  @media (max-width: 520px) {
    font-size: 24px;
    top: 45%;
    left: 0;
    line-height: 24px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
    top: 40%;
    left: -3px;
    line-height: 24px;
  }
`;

export const Text = styled.p`
  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;

  @media (max-width: 375px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.82px;
  }
`;

export const Card = styled.div`
  color: white;
  width: 380px;
  height: 218px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  background-image: url("/images/about_card.jpeg");
  background-size: cover;
  background-position: center;

  @media (max-width: 1440px) {
    width: 500px;
    height: 220px;
  }
  @media (max-width: 1080px) {
    max-width: 500px;
    width: 100%;
    min-height: 220px;
    height: auto;
  }

  @media (max-width: 520px) {
    gap: 8px;
    padding: 12px 8px;
  }
`;
