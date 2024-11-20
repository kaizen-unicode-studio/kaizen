import { FC, ReactNode } from "react";
import { Amount, Header, HeaderWrapper, StyledContent } from "./style";
import List from "../List";

interface ExpandContentProps {
  header: string;
  listHeader?: string;
  amount: number;
  children: ReactNode;
}

const ExpandContent: FC<ExpandContentProps> = ({
  amount,
  header,
  listHeader,
  children,
}) => {
  return (
    <StyledContent>
      <HeaderWrapper>
        <Header>{header}</Header>
        <Amount>£{amount.toFixed(2)}</Amount>
      </HeaderWrapper>
      <List css={{ paddingBlock: 12 }} header={listHeader || ""}>
        {children}
      </List>
    </StyledContent>
  );
};

export default ExpandContent;
