import arrow from "/public/icons/right_arrow_violet.svg";
import increment from "/public/icons/increment.svg";
import decrement from "/public/icons/decrement.svg";
import Image from "next/image";
import { Button } from "./style";
import { ComponentPropsWithRef, FC } from "react";

interface NavButtonProps extends ComponentPropsWithRef<"button"> {
  image?: "arrow" | "increment" | "decrement";
  text?: string;
  rotateProp?: number;
}

const NavButton: FC<NavButtonProps> = ({ ...props }) => {
  if (props.text) {
    return <Button>{props.text}</Button>;
  }

  const image =
    props.image === "arrow"
      ? arrow
      : props.image === "increment"
      ? increment
      : decrement;

  return (
    <Button {...props} aria-label="nav button">
      <Image
        style={
          props.rotateProp
            ? { transform: `rotate(${props.rotateProp}deg)` }
            : {}
        }
        src={image}
        alt={props.image || "decrement"}
      ></Image>
    </Button>
  );
};

export default NavButton;
