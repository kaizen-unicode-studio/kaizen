"use client";

import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 340px;
  border-radius: 12px;
  background-image: url("/covers/first_slide_cover.png");
  background-position: center center;
  background-size: cover;
  padding-inline: 24px;
`;

export const Title = styled.h5`
  font-size: 26px;
  font-weight: 600;
  line-height: 39.01px;
  color: var(--main-color);
`;
