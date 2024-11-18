"use client";
import styled from "@emotion/styled";
import { Cantarell } from "next/font/google";

export const Header = styled.header`
  color: var(--main-color);
  max-width: 1440px;
  margin-inline: auto;
  > p {
    margin-left: 24px;
    font-size: 12px;
    margin-block: 8px;
  }
`;

export const Menu = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fbf7fa;
  padding: 24px 24px 8px;
`;

export const Nav = styled.nav`
  display: flex;
  height: 40px;
  gap: 12px;
  align-items: center;
`;

export const Tab = styled.div`
  padding: 8px 16px;
  color: var(--main-color);
  font-family: "Cantarell";
`;
