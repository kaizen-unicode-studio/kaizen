import violetArrow from "/public/icons/violetArrow.svg";
import increment from "/public/icons/increment.svg";
import decrement from "/public/icons/decrement.svg";
import Image from "next/image";
import { Button } from "./style";
import { FC } from "react";

interface NavButtonProps {
  image: "arrow" | "increment" | "decrement";
}

const NavButton: FC<NavButtonProps> = ({ ...props }) => {
  const image =
    props.image === "arrow"
      ? violetArrow
      : props.image === "increment"
      ? increment
      : decrement;

  return (
    <Button>
      <Image src={image} alt={""}></Image>
    </Button>
  );
};

export default NavButton;
