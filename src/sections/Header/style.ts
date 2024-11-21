"use client";
import styled from "@emotion/styled";

export const Header = styled.header`
  background: var(--violet-dark);
  color: var(--main-color);
  padding-inline: 80px;
  margin-inline: auto;

  > p {
    margin-left: 24px;
    letter-spacing: 0.5px;
    word-spacing: -1.1px;
    font-size: 12px;
    padding-block: 10px;
  }

  @media (max-width: 568px) {
    padding-inline: 16px;
  }
`;

export const Menu = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fbf7fa;
  padding: 17px 24px 8px;
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
