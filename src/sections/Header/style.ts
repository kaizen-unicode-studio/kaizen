"use client";
import styled from "@emotion/styled";

export const Header = styled.header`
  background: var(--violet-dark);
  padding-inline: 80px;
  color: var(--main-color);
`;

export const Container = styled.div`
  max-width: 1760px;
  width: 100%;

  @media (max-width: 1600px) {
    max-width: 1440px;
  }

  > p {
    font-family: "Cantarell";
    margin-left: 24px;
    letter-spacing: -0.2px;
    word-spacing: 1.2px;
    font-size: 12px;
    padding-block: 8px;
    line-height: 1.4;
  }

  @media (max-width: 568px) {
    padding-inline: 16px;
  }
`;

export const Menu = styled.menu`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fbf7fa;
  padding: 19px 24px 10px;

  > .modal-toggle {
    display: none;
    @media (max-width: 568px) {
      display: block;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  height: 40px;
  gap: 12px;
  align-items: center;
  @media (max-width: 568px) {
    display: none;
  }
`;

export const Tab = styled.div`
  padding: 8px 16px;
  color: var(--main-color);
  font-family: "Cantarell";
`;
