import { CSSProperties, FC } from "react";
interface CartItemProps {
  name: string;
  description: string;
  id: number;
  amount: number;
  attached_link: string;
}

const Card: CSSProperties = {
  background: `#fbf7fa`,
  padding: "16px",
  borderRadius: "12px",
  margin: "20px 0",
  width: 400,
};

const Header: CSSProperties = {
  fontSize: "17px",
  lineHeight: "1.8",
  letterSpacing: "0.2px",
  fontWeight: 500,
  alignItems: "flex-start",
  display: "block",
  margin: 0,
  color: "#1b1a1d",
};

const Amount: CSSProperties = {
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "24.38px",
  color: "#7861a9",
  display: "block",
  textAlign: "right",
  margin: 0,
};

const Description: CSSProperties = {
  fontFamily: "Cantarell",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "16.99px",
  color: "#1b1a1d",
  width: "70%",
};

const CartItem: FC<CartItemProps> = ({
  amount,
  description,
  name,
  attached_link,
}) => {
  return (
    <a href={attached_link} target="_blank" style={Card}>
      <h6 style={Header}>{name}</h6>
      <p style={Description}>{description}</p>
      <p style={Amount}>£{amount.toFixed(2)}</p>
      {/* {attached_link && <a href={attached_link}>Click here to learn more</a>} */}
    </a>
  );
};

export default CartItem;
