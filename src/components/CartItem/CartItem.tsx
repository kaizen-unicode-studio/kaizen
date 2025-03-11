import { FC } from "react";
import { Amount, Card, Description, Header, Remove } from "./style";
import remove from "/public/icons/remove.svg";
import Image from "next/image";
import { IProduct } from "@/products";
interface CartItemProps {
  name: string;
  description: string;
  id: number;
  amount: number;
  bgColor?: string;
}

const CartItem: FC<CartItemProps> = ({
  amount,
  description,
  id,
  name,
  bgColor = "--secondary-color",
}) => {
  const handleRemove = () => {
    const items: { data: IProduct[] } = JSON.parse(
      localStorage.getItem("basket") || '{"data": []}'
    );

    localStorage.setItem(
      "basket",
      JSON.stringify({ data: items.data.filter((item) => item.id !== id) })
    );
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <Card var={bgColor}>
      <Header>
        {name}
        <div>
          <Amount>${amount.toFixed(2)}</Amount>
          <Remove onClick={handleRemove}>
            <Image src={remove} alt={"Trash bin"} />
          </Remove>
        </div>
      </Header>
      <Description>{description}</Description>
    </Card>
  );
};

export default CartItem;
