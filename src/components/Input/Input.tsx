import React, { ComponentPropsWithRef, FC } from "react";
import { Label, StyledInput } from "./style";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { Fields } from "@/sections/CheckoutPage/CheckoutPage";

interface InputProps extends ComponentPropsWithRef<"input"> {
  label: string;
  description?: string;
  register: UseFormRegister<Fields>;
  registerKey: keyof Fields;
  params: RegisterOptions;
}

const Input: FC<InputProps> = ({ label, description, register, ...rest }) => {
  return (
    <Label>
      {label}
      <StyledInput
        {...register}
        type="text"
        {...rest}
        placeholder="Enter your details"
      />
      {description && <p>{description}</p>}
    </Label>
  );
};

export default Input;
