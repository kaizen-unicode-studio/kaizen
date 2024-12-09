"use client";

import styled from "@emotion/styled";

export const StyledFounder = styled.section`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-width: 1180px;

  @media (max-width: 1440px) {
    max-width: 1020px;
  }

  @media (max-width: 1080px) {
    padding-inline: 16px;
  }
`;

export const Header = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.4px;

  @media (max-width: 375px) {
    border-bottom: 1px solid black;
    font-size: 21px;
    letter-spacing: -0.1px;
    line-height: 1.7;
  }
`;

export const MobileText = styled.p`
  display: none;
  @media (max-width: 375px) {
    font-variant: small-caps;
    margin-block: 12px;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    display: block;
  }
`;

export const Container = styled.article`
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 582px);
  margin-bottom: 45px;

  @media (max-width: 1440px) {
    grid-template-columns: auto 418px;
  }

  @media (max-width: 1280px) {
    grid-template-columns: 582px auto;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FounderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

export const FounderImage = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 768px) {
    background: var(--black);
    border-radius: 12px;
  }

  img {
    margin-top: 19px;
    width: 578px;
    height: 625px;
    border-radius: 12px;

    object-fit: cover;
    object-position: center -190px;

    @media (max-width: 1440px) {
      margin-top: 17px;
      object-position: center;
      width: 418px;
    }

    @media (max-width: 1080px) {
      width: auto;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 590px;
    }

    @media (max-width: 375px) {
      height: 420px;
    }
  }
`;

export const FounderName = styled.p`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-family: Cantarell;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    border-radius: 12px;
    width: 100%;

    padding: 32px;
    color: var(--main-color);
    background: var(--black);
  }
  @media (max-width: 375px) {
    padding: 12px;
  }
`;

export const Text = styled.p`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 32px;
    color: var(--main-color);
    font-family: "Cantarell";
    font-size: 16px;
    font-weight: 400;
    line-height: 22.66px;
  }

  @media (max-width: 375px) {
    padding: 12px;
    line-height: 1.45;
  }

  > span {
    margin-top: 16px;
    align-self: flex-end;
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 42px;
  gap: 20px;

  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Card = styled.p`
  font-family: Cantarell;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 32px;
  color: var(--main-color);
  background: var(--black);

  > span {
    margin-top: 16px;
    align-self: flex-end;
  }
`;
