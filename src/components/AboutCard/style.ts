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
  font-size: 128px;
  font-weight: 700;
  line-height: 0.7;
  margin-left: -10px;

  @media (max-width: 520px) {
    font-size: 64px;
    line-height: 80px;
    margin-left: 0;
    text-align: center;
  }
  @media (max-width: 375px) {
    font-size: 64px;
    text-align: center;
    line-height: 72px;
  }
`;

export const Header = styled.h3`
  position: absolute;
  left: 0;
  top: 39%;
  color: var(--main-color);
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.5px;

  @media (max-width: 520px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
    top: 39%;
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
export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.32);
  color: white;
  gap: 35px;
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 8px;

  @media (max-width: 1080px) {
    max-width: 500px;
    width: 100%;
    min-height: 220px;
    height: auto;
  }

  @media (max-width: 520px) {
    padding: 12px 8px;
    gap: 8px;
  }

  @media (max-width: 375px) {
    justify-content: start;
    gap: 0px;
    padding: 0px 9px 11px;
    min-height: 170px;
  }
`;

export const Card = styled.div`
  background-image: url(${({ img }: { img: string }) => `"${img}"`});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;
