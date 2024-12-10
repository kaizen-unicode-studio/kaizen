import { FC, ReactNode } from "react";
import {
  Amount,
  Header,
  HeaderWrapper,
  StyledContent,
  InnerContent,
} from "./style";
import List from "../List";

interface ExpandContentProps {
  header: string;
  listHeader?: string;
  price: number;
  children?: ReactNode;
}

const ExpandContent: FC<ExpandContentProps> = ({
  price,
  header,
  listHeader,
  children,
}) => {
  return (
    <StyledContent>
      <HeaderWrapper>
        <Header>{header}</Header>
        <Amount>€{price.toFixed(2)}</Amount>
      </HeaderWrapper>
      {children && listHeader && (
        <List css={{ paddingBlock: 12 }} header={listHeader || ""}>
          {children}
        </List>
      )}
      {children && !listHeader && <InnerContent>{children}</InnerContent>}
    </StyledContent>
  );
};

export default ExpandContent;
