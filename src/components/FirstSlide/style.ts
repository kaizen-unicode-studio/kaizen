"use client";

import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ small }: { small: boolean }) => (small ? "auto" : "380px")};
  height: ${({ small }: { small: boolean }) => (small ? "146px" : "340px")};
  border-radius: 12px;
  background-image: url("/covers/first_slide_cover.png");
  background-position: center center;
  background-size: cover;
  padding-inline: 36px;
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 600;
  line-height: 39.01px;
  color: var(--main-color);
`;
