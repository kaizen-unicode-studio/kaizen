"use client";

import styled from "@emotion/styled";

export const StyledKaizen = styled.section`
  max-width: 1180px;
  margin-inline: auto;
  margin-top: 64px;
  display: grid;
  grid-template-columns: auto 482px;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1440px) {
    max-width: 1020px;
    grid-template-columns: auto 322px;
  }

  @media (max-width: 1080px) {
    padding-inline: 16px;
  }

  @media (max-width: 840px) {
    grid-template: 1fr / 1fr;
  }

  @media (max-width: 400px) {
    padding-inline: 10px;
  }

  .main_image {
    width: 482px;
    height: 480px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center center;

    @media (max-width: 1440px) {
      width: 322px;
    }

    @media (max-width: 840px) {
      display: none;
    }
  }

  .mobile_image {
    display: none;

    @media (max-width: 840px) {
      display: block;
      object-fit: cover;
      object-position: center center;
      width: 480px;
      height: 420px;
      border-radius: 8px;
      margin-block: 32px;
    }

    @media (max-width: 520px) {
      width: 350px;
      height: 300px;
    }

    @media (max-width: 375px) {
      width: 343px;
      height: 295px;
      margin-block: 14px;
    }
  }
`;

export const Container = styled.article`
  display: block;

  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.h3`
  color: var(--black);
  font-size: 128px;
  font-weight: 700;
  letter-spacing: 41px;
  line-height: 0.8;
  margin-bottom: 15px;
  padding-top: 55px;

  @media (max-width: 1080px) {
    font-size: 100px;
    line-height: 97.5px;
    letter-spacing: 0.16em;
    padding-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 80px;
    line-height: 97.5px;
    letter-spacing: 0.16em;
    padding-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: 400px) {
    line-height: 0.7;
    padding: 16px 0 10px;
    font-size: 72px;
  }

  > span {
    color: var(--black);
    font-size: 128px;
    letter-spacing: 20px;
    line-height: 0.8 !important;
    font-weight: 200;
    padding-top: 55px;

    @media (max-width: 1080px) {
      font-size: 100px;
      line-height: 97.5px;
      letter-spacing: 0.16em;
      padding-top: 0;
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      font-size: 80px;
      letter-spacing: 0.02em;
    }

    @media (max-width: 400px) {
      font-size: 72px;
    }
  }
`;

export const Quote = styled.p`
  font-variant: small-caps;
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
  color: var(--black);
  letter-spacing: 1.6px;
  word-spacing: 3.9px;
  margin-bottom: 18px;

  @media (max-width: 375px) {
    margin-bottom: 10px;
  }
`;

export const Japanese = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
  margin-bottom: 18px;
  font-family: "Fira Sans Condensed";
`;

export const Text = styled.p`
  font-size: 24px;
  font-variant: small-caps;
  font-weight: 300;
  line-height: 29px;
  width: 66%;
  letter-spacing: 2.5px;
  word-spacing: -4px;

  @media (max-width: 768px) {
    max-width: 480px;
    width: 100%;
  }
  @media (max-width: 375px) {
    padding: 15px 6px;
  }
`;

export const Cover = styled.div`
  position: absolute;
  top: 16px;
  left: 287px;
  z-index: -10;

  > img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
