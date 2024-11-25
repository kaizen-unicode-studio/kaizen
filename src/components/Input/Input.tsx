import React, { ComponentPropsWithRef, FC } from "react";
import { Label, StyledInput } from "./style";

interface InputProps extends ComponentPropsWithRef<"input"> {
  label: string;
  description?: string;
}

const Input: FC<InputProps> = ({ label, description, ...rest }) => {
  return (
    <Label>
      {label}
      <StyledInput type="text" {...rest} placeholder="Enter your details" />
      {description && <p>{description}</p>}
    </Label>
  );
};

export default Input;
