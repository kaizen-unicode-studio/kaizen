"use client";

import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background: ${({ theme }: { theme: "ghost" | "dark" }) =>
    theme === "ghost" ? "transparent" : "var(--violet-primary)"};

  gap: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  padding: 7px 8px 7px 11px;
  border-radius: 50px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  display: ${({ hidden }: { hidden?: boolean }) => (hidden ? "none" : "flex")};
  align-items: center;
`;
