"use client";

import styled from "@emotion/styled";

export const StyledHero = styled.section`
  background: var(--violet-dark);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  padding: 0 80px 60px;

  @media (max-width: 768px) {
    padding: 0 16px 20px;
  }
`;

export const Container = styled.div`
  max-width: 1760px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1600px) {
    max-width: 1440px;
  }

  @media (max-width: 1280px) {
    padding: 40px 0;
    gap: 24px;
  }

  > p {
    display: none;

    @media (max-width: 1280px) {
      display: block;
      align-self: center;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.5px;
    }

    @media (max-width: 568px) {
      margin-inline: 10px;
    }
  }
`;

export const TextSection = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

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

export const ImageSection = styled.article`
  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 20px;

  @media (max-width: 1280px) {
    grid-template-columns: 330px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 167px 1fr;
  }

  @media (max-width: 568px) {
    margin-inline: 40px;
  }

  @media (max-width: 375px) {
    margin-inline: 10px;
    grid-template-columns: 167px 1fr;
    gap: 8px;
  }
  img {
    border-radius: 12px;
  }

  > img:nth-of-type(1) {
    height: 497px;
    width: 520px;
    object-fit: cover;
    object-position: center -190px;

    @media (max-width: 1600px) {
      height: 420px;
      width: 520px;
      object-fit: cover;
      object-position: center -230px;
    }

    @media (max-width: 1280px) {
      width: 330px;
      object-position: center;
    }
    @media (max-width: 768px) {
      width: 167px;
      height: 280px;
    }
  }
  > img:nth-of-type(2) {
    height: 497px;
    width: 100%;
    object-fit: cover;
    object-position: bottom;

    @media (max-width: 1600px) {
      height: 420px;
      width: 100%;
      object-fit: cover;
      object-position: bottom;
    }

    @media (max-width: 768px) {
      height: 280px;
    }
  }
`;

export const Header = styled.h1`
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
