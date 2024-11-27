"use client";

import styled from "@emotion/styled";

export const StyledBag = styled.div`
  z-index: 40;

  position: fixed;
  bottom: 163px;
  right: 32px;
  > img {
    position: relative;
    cursor: pointer;
  }

  > div {
    position: absolute;
    bottom: 0;
    right: -5px;
    content: "";
    width: 24px;
    height: 24px;
    background: #000;
    border-radius: 50%;
    z-index: 50;

    color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
