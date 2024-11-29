import React, { FC, ReactNode } from "react";
import { Header, StyledList } from "./style";

interface ListProps {
  header?: string;
  children: ReactNode;
  css?: React.CSSProperties | undefined;
}

const List: FC<ListProps> = ({ header, children, css }) => {
  return (
    <div>
      {header && <Header>{header}</Header>}
      <StyledList style={css}>{children}</StyledList>
    </div>
  );
};

export default List;
