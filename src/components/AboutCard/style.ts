"use client";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
`;

export const Letter = styled.span`
  opacity: 0.45;
  color: var(--extra-light-gray);
  font-family: "Montserrat";
  font-size: 128px;
  font-weight: 700;
  line-height: 110px;
  letter-spacing: 0.32em;
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
`;

export const Text = styled.p`
  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22.66px;
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
`;
