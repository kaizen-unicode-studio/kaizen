import { FC } from "react";
import CartItem from "../CartItem/CartItem";
import { Overflow, Total } from "./style";
import { IProduct } from "@/products";

interface OrderProps {
  bgColor?: string;
}

const Order: FC<OrderProps> = ({ bgColor }) => {
  const items: { data: IProduct[] } = JSON.parse(
    localStorage.getItem("basket") || '{"data": []}'
  );
  const total = items.data
    .map((item) => item.amount)
    .reduce((acc, cur) => acc + cur);

  return (
    <div>
      <Overflow>
        {items.data.map((product) => (
          <CartItem bgColor={bgColor} key={product.id} {...product}></CartItem>
        ))}
      </Overflow>

      <Total>
        TOTAL AMOUNT <span>£{total.toFixed(2)}</span>
      </Total>
    </div>
  );
};

export default Order;