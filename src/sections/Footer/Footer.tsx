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
import Image from "next/image";
import mail from "/public/icons/mail.svg";
import instagram from "/public/icons/instagram.svg";
import phone from "/public/icons/phone.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Header>CONTACT INFO</Header>
        <Grid>
          <Section style={{ gridColumnStart: 2 }}>
            <SubHeader>CUSTOMER SUPPORT</SubHeader>
            <div>
              <Item>
                {" "}
                <Image src={mail} alt={""} />
                kaizenbyyulia@gmail.com
              </Item>
              <Item>
                <Image src={instagram} alt={""} />
                kaizenpro.j
              </Item>
            </div>
          </Section>
          <Section>
            <SubHeader>FOR COLLABORATIONS</SubHeader>
            <div>
              <Item>
                {" "}
                <Image src={mail} alt={""} />
                yulia.dantes@gmail.com
              </Item>
              <Item>
                <Image src={instagram} alt={""} />
                yuliadantes
              </Item>

              <Item>
                <Image src={phone} alt={""} />
                +447300490640
              </Item>
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
