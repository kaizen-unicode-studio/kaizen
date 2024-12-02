"use client";

import styled from "@emotion/styled";

export const Container = styled.section`
  background: var(--violet-dark);
  padding: 100px 80px 60px;
  width: 100%;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;

  @media (max-width: 768px) {
    padding: 100px 16px 24px;
  }
  @media (max-width: 520px) {
    padding: 100px 0 24px;
  }
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

  @media (max-width: 1280px) {
    justify-content: center;
    flex-direction: column;
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
`;

export const SubHeader = styled.h5`
  font-size: 24px;
  font-weight: 500;
  line-height: 29.26px;
  margin-top: 64px;
`;

export const Error = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  font-variant: small-caps;
  margin-bottom: 32px;
`;

export const Empty = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 700px;
  min-height: 50vh;

  padding-inline: 80px;
  margin-inline: auto;
  margin-block: 110px;

  @media (max-width: 768px) {
    padding-inline: 16px;
  }
`;

export const Mobile = styled.article`
  display: none;

  @media (max-width: 1280px) {
    gap: 16px;
    display: flex;
    flex-direction: column;
  }

  > img {
    max-width: 1180px;
    width: 100%;
    height: 280px;
    border-radius: 8px;

    object-fit: cover;
    object-position: bottom center;

    @media (max-width: 520px) {
      height: 180px;
    }
  }
`;

export const MobileText = styled.p`
  color: var(--main-color);
  display: block;
  align-self: center;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  max-width: 1000px;
  text-align: left;

  font-family: Cantarell;
  line-height: 1.6;

  @media (max-width: 375px) {
    line-height: 20px;
    font-size: 16px;
  }
`;
