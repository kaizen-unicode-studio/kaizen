"use client";

import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import { StyledButton } from "./style";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  theme?: "ghost" | "dark";
  children: ReactNode;
  onClick?: () => any;
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
