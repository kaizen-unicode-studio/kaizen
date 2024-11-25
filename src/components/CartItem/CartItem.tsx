import { FC } from "react";
import { Amount, Card, Description, Header } from "./style";

interface CartItemProps {
  name: string;
  description: string;
  amount: number;
  bgColor?: string;
}

const CartItem: FC<CartItemProps> = ({
  amount,
  description,
  name,
  bgColor = "--secondary-color",
}) => {
  return (
    <Card var={bgColor}>
      <Header>
        {name}
        <Amount>£{amount.toFixed(2)}</Amount>
      </Header>
      <Description>{description}</Description>
    </Card>
  );
};

export default CartItem;
