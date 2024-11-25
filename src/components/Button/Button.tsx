"use client";

import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import { StyledButton } from "./style";

export type ThemeType = "ghost" | "dark" | "pay";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  theme?: ThemeType;
  children: ReactNode;
  onClick?: () => void;
  hidden?: boolean;
}

const Button: FC<ButtonProps> = ({
  theme = "ghost",
  hidden = false,
  children,
  ...rest
}) => {
  return (
    <StyledButton {...rest} hidden={hidden} theme={theme}>
      {children}
    </StyledButton>
  );
};

export default Button;
