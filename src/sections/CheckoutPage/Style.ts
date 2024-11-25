"use client";

import styled from "@emotion/styled";

export const Container = styled.section`
  max-width: 1180px;
  padding-inline: 80px;
  margin-inline: auto;
  margin-block: 64px 120px;
`;

export const Header = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  gap: 120px;
`;
