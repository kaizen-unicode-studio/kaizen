"use client";
import styled from "@emotion/styled";

export const StyledHero = styled.section`
  padding: 0 0 60px;
  border-bottom-left-radius: 24px;
  border-color: white;
`;

export const TextSection = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin-inline: auto;
  margin-bottom: 50px;
`;

export const ImageSection = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin-inline: auto;
`;

export const Header = styled.h1`
  color: var(--light-gray);
  font-size: 128px;
  font-family: "Montserrat";
  font-weight: 700;
  line-height: 156.03px;
  letter-spacing: 0.32em;
  > span {
    font-family: "Montserrat";
    color: var(--extra-light-gray);
    font-weight: 200;
    letter-spacing: 0.16em;
    line-height: 156.03px;
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
