"use client";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  z-index: 40;
  position: fixed;
  inset: 0;
  background: rgba(var(--dark-gray-rgb), 0.4);
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background: var(--main-color);
  height: 100vh;
  max-height: 100vh;
  padding: 24px 20px;
  border-bottom-left-radius: 32px;
  border-top-left-radius: 32px;
  width: 480px;

  @media (max-width: 520px) {
    width: 100%;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

export const Header = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding-block: 5px;

  > img {
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: var(--black);
`;

export const SubHeader = styled.h5`
  font-size: 24px;
  font-weight: 500;
  line-height: 29.26px;
  margin-top: 64px;
`;

export const Error = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  font-variant: small-caps;
  margin-bottom: 32px;
`;
