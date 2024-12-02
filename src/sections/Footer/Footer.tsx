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
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter id="contacts">
      <Container>
        <Header>CONTACT INFO</Header>
        <Grid>
          <Section>
            <SubHeader>CUSTOMER SUPPORT</SubHeader>
            <div>
              <Item>
                {" "}
                <Image src={mail} alt={"Mail"} />
                <Link
                  href="mailto:kaizenbyyulia@gmail.com"
                  style={{ textDecoration: "underline" }}
                >
                  kaizenbyyulia@gmail.com
                </Link>
              </Item>
              <Item>
                <Image src={instagram} alt={"Instagram logo"} />
                <Link
                  target="_blank"
                  href="https://www.instagram.com/kaizenpro.j/"
                >
                  kaizenpro.j
                </Link>
              </Item>
            </div>
          </Section>
          <Section>
            <SubHeader>FOR COLLABORATIONS</SubHeader>
            <div>
              <Item>
                {" "}
                <Image src={mail} alt={"Mail"} />
                <Link
                  href="mailto:yulia.dantes@gmail.com"
                  style={{ textDecoration: "underline" }}
                >
                  yulia.dantes@gmail.com
                </Link>
              </Item>
              <Item>
                <Image src={instagram} alt={"Instagram logo"} />
                <Link
                  target="_blank"
                  href="https://www.instagram.com/yuliadantes/"
                >
                  yuliadantes
                </Link>
              </Item>

              <Item>
                <Image src={phone} alt={"Phone"} />
                <Link href="tel:+447300490640">+447300490640</Link>
              </Item>
            </div>
          </Section>
          <Section>
            <SubHeader>INFOS</SubHeader>
            <div>
              <Item>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Item>
              <Item>
                <Link href="/terms">Terms & Conditions</Link>
              </Item>
              <Item>
                <Link href="/refund">Refund Policy</Link>
              </Item>
            </div>
          </Section>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
