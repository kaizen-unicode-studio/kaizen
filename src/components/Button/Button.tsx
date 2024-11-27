"use client";

import React, {
  ComponentPropsWithRef,
  FC,
  isValidElement,
  ReactNode,
} from "react";
import { StyledButton, StyledLink } from "./style";

export type ThemeType = "ghost" | "dark" | "pay" | "ghost-invert";

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
  const isLink =
    isValidElement(children) &&
    (() => {
      const type = children.type as unknown as { render: { name: string } };
      return type.render.name === "LinkComponent";
    })();

  if (isLink)
    return (
      <StyledLink hidden={hidden} theme={theme}>
        {children}
      </StyledLink>
    );
  return (
    <StyledButton {...rest} hidden={hidden} theme={theme}>
      {children}
    </StyledButton>
  );
};

export default Button;
