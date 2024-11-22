import React from "react";

import {
  Container,
  Grid,
  Header,
  Item,
  Section,
  StyledFooter,
  SubHeader,
} from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Header>CONTACT INFO</Header>
        <Grid>
          <Section style={{ gridColumnStart: 2 }}>
            <SubHeader>CUSTOMER SUPPORT</SubHeader>
            <div>
              <Item>kaizenbyyulia@gmail.com</Item>
              <Item>kaizenpro.j</Item>
            </div>
          </Section>
          <Section>
            <SubHeader>FOR COLLABORATIONS</SubHeader>
            <div>
              <Item>yulia.dantes@gmail.com</Item>
              <Item>yuliadantes</Item>
              <Item>+447300490640</Item>
            </div>
          </Section>
          <Section>
            <SubHeader>INFOS</SubHeader>
            <div>
              <Item>Privacy Policy</Item>
              <Item>Terms & Conditions</Item>
              <Item>Refund Policy</Item>
            </div>
          </Section>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
