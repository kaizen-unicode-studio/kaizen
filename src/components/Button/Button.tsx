"use client";

import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import { StyledButton, StyledLink } from "./style";

export type ThemeType = "ghost" | "dark" | "pay" | "ghost-invert";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  theme?: ThemeType;
  children: ReactNode;
  hidden?: boolean;
  isLink?: boolean;
}

const Button: FC<ButtonProps> = ({
  theme = "ghost",
  hidden = false,
  children,
  isLink,
  ...rest
}) => {
  if (isLink)
    return (
      <StyledLink hidden={hidden} theme={theme} aria-label="link">
        {children}
      </StyledLink>
    );
  return (
    <StyledButton {...rest} hidden={hidden} theme={theme} aria-label="button">
      {children}
    </StyledButton>
  );
};

export default Button;
