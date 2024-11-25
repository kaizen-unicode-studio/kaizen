import { FC, ReactNode } from "react";
import { Amount, Card, Description, Header } from "./style";

interface CartItemProps {
  id: number;
  name: string;
  description: string;
  amount: number;
}

const CartItem: FC<CartItemProps> = ({ amount, description, id, name }) => {
  return (
    <Card>
      <Header>
        {name}
        <Amount>£{amount.toFixed(2)}</Amount>
      </Header>
      <Description>{description}</Description>
    </Card>
  );
};

export default CartItem;
