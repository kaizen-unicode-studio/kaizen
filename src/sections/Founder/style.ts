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
  @media (max-width: 768px) {
    padding-inline: 16px;
  }
`;

export const Header = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.4px;
`;

export const Container = styled.article`
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 582px);
  margin-bottom: 45px;

  @media (max-width: 1440px) {
    grid-template-columns: 582px 578px;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FounderContainer = styled.article`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const FounderImage = styled.div`
  display: flex;
  flex-direction: column;

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
      height: 950px;
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
`;

export const Text = styled.p`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 32px;
    color: var(--main-color);
    font-family: "Cantarell";
    font-size: 16px;
    font-weight: 400;
    line-height: 22.66px;
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

  padding: 32px;
  color: var(--main-color);
  background: var(--black);
`;
