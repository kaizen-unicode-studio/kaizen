import React, { ComponentPropsWithRef, FC } from "react";
import { Label, StyledInput } from "./style";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import { Fields } from "@/sections/CheckoutPage/CheckoutPage";

interface InputProps extends ComponentPropsWithRef<"input"> {
  label: string;
  description?: string;
  register: UseFormRegister<Fields>;
  registerKey: keyof Fields;
  params: RegisterOptions<Fields, keyof Fields>;
  error: { state: FieldError | undefined; message: string };
}

const Input: FC<InputProps> = ({
  label,
  description,
  register,
  registerKey,
  params,
  error,
  ...rest
}) => {
  return (
    <Label>
      {label}
      <StyledInput
        {...register(registerKey, { ...params })}
        type="text"
        error={error.state}
        {...rest}
        placeholder="Enter your details"
      />
      {error.state && <p className="error">{error.message}</p>}
      {description && <p>{description}</p>}
    </Label>
  );
};

export default Input;
