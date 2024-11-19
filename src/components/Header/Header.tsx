import { Header as StyledHeader, Menu, Nav, Tab } from "./style";
import Image from "next/image";
import logo from "@/../public/icons/logo.svg";
import { useTranslations } from "next-intl";
import ToggleMenu from "../ToggleMenu";

const Header = () => {
  return (
    <StyledHeader>
      <Menu>
        <Image src={logo} alt="" />
        <Nav>
          <Tab>About</Tab>
          <Tab>Services</Tab>
          <Tab>Contacts</Tab>
        </Nav>
        <ToggleMenu />
      </Menu>
      <p>Your Journey of Mindful Change for Body and Soul</p>
    </StyledHeader>
  );
};

export default Header;
