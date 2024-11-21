"use client";

import styled from "@emotion/styled";

export const StyledKaizen = styled.section`
  max-width: 1180px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: auto 482px;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 482px;
    height: 480px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center center;
  }
`;

export const Container = styled.article`
  display: block;
`;

export const Header = styled.h1`
  color: var(--black);
  align-self: safe;
  font-size: 128px;
  font-weight: 700;
  letter-spacing: 41px;

  @media (max-width: 768px) {
    font-size: 80px;
    line-height: 97.5px;
    letter-spacing: 0.16em;
  }

  > span {
    color: var(--dark-gray);
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

export const Quote = styled.p`
  font-variant: small-caps;
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
  color: var(--black);
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
  width: 55%;
`;
