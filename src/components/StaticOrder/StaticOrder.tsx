import { CSSProperties } from "react";
import { products } from "@/products";
import StaticCartItem from "../StaticCartItem";
import { Html } from "@react-email/components";
import { Description } from "../StaticCartItem/StaticCartItem";
interface OrderProps {
  itemsNames: string;
  amount: number;
}

const Container: CSSProperties = {
  display: "block",
  width: 440,
  margin: "0 auto",
};

const Text: CSSProperties = {
  width: "100%",
  borderTop: "1px solid #c5c2c7",
  borderBottom: "1px solid #c5c2c7",
  marginBlock: "24px",
  display: "block",
  padding: "16px 0",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "24.38px",
  color: "#422585",
  textAlign: "center",
};

const Overflow: CSSProperties = {
  marginBlock: 12,
  display: "block",
  overflowY: "auto",
};

const StaticOrder = ({ itemsNames, amount }: OrderProps) => {
  const getItems = () => {
    const names: string[] = itemsNames
      .substring(1, itemsNames.length - 1)
      .split(", ");
    console.log("names:", names);

    const items = names.map(
      (item) => products.find((product) => product.name.match(item))!
    );
    return { data: items };
  };
  const items = getItems();

  const total = amount;

  return (
    <Html>
      <div style={Container}>
        <div style={Overflow}>
          {items.data.map((product) => (
            <StaticCartItem key={product.id} {...product}></StaticCartItem>
          ))}
        </div>
        <p style={Text}>
          TOTAL AMOUNT <span>${total.toFixed(2)}</span>
        </p>
        <p style={{ ...Description, fontSize: "16px" }}>
          For any questions or support, feel free to reach out. Best regards,
        </p>
        <p style={{ ...Description, fontSize: "16px" }}>
          Kaizen Project Team https://kaizenproject.net
        </p>
        <p style={{ ...Description, fontSize: "16px" }}>
          (https://kaizenproject.net/%22%20%5Ct%20%22_new)
          kaizenbyyulia@gmail.com
        </p>
        <p style={{ ...Description, fontSize: "16px" }}>kaizenpro.j</p>
        <p style={{ ...Description, fontSize: "16px" }}>
          (https://www.instagram.com/kaizenpro.j/%22%20%5Ct%20%22_blank)
        </p>
      </div>
    </Html>
  );
};

export default StaticOrder;
