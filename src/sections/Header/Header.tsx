import { Header as StyledHeader, Menu, Nav, Tab, Container } from "./style";
import Image from "next/image";
import logo from "/public/icons/logo.svg";
import ToggleMenu from "@/components/ToggleMenu";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu>
          <Image src={logo} alt="" />
          <Nav>
            <Tab href="#about">About</Tab>
            <Tab href="#services">Services</Tab>
            <Tab href="#contacts">Contacts</Tab>
          </Nav>
          <ToggleMenu />
        </Menu>
        <p>Your Journey of Mindful Change for Body and Soul</p>
      </Container>
    </StyledHeader>
  );
};

export default Header;
