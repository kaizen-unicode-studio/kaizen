"use client";

import styled from "@emotion/styled";

export const Section = styled.section`
  background: var(--violet-dark);
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  padding: 100px 80px 60px;

  @media (max-width: 1280px) {
    padding: 100px 16px 24px;
  }
  @media (max-width: 375px) {
    padding: 100px 10px 24px;
  }
`;

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1760px;
  width: 100%;
  margin-inline: auto;

  @media (max-width: 1600px) {
    max-width: 1440px;
  }

  @media (max-width: 1280px) {
    justify-content: center;
    flex-direction: column;
    padding-inline: 0;
  }
`;

export const Header = styled.h1`
  color: var(--light-gray);
  font-size: 128px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 41px;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

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

  @media (max-width: 1280px) {
    max-width: 780px;
  }
`;
