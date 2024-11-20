import React, { FC, ReactNode } from "react";
import { Header, StyledList } from "./style";
import { css } from "@emotion/react";

interface ListProps {
  header?: string;
  children: ReactNode;
  css?: React.CSSProperties | undefined;
}

const List: FC<ListProps> = ({ header, children, css }) => {
  return (
    <StyledList style={css}>
      {header && <Header>{header}</Header>}
      {children}
    </StyledList>
  );
};

export default List;
