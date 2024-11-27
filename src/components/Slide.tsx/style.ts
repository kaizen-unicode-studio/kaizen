"use client";

import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 340px;
  padding: 16px 16px 12px 16px;
  border-radius: 12px;
  border: 1px;
  background: var(--extra-light-gray);
  box-shadow: 0 5px 5px var(--violet-light);

  @media (max-width: 1180px) {
    height: auto;
  }

  > img {
    width: 76px;
    height: 52px;
    opacity: 0.16;
    transform: rotate(180deg);
  }
`;

export const Text = styled.p`
  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  margin-block: 12px;
`;

export const Customer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > img {
    width: 76px;
    height: 52px;
    opacity: 0.16;
  }
`;

export const Name = styled.p`
  font-family: "Cantarell";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--violet-primary);
  display: flex;
  align-items: center;
  margin-left: 8px;
`;
export const Avatar = styled.div`
  display: flex;
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;
