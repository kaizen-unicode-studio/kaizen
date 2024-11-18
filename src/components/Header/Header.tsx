import { Header as StyledHeader, Menu, Nav, Tab } from "./style";
import Image from "next/image";
import logo from "@/../public/icons/logo.svg";
import { useTranslations } from "next-intl";
import ToggleMenu from "../ToggleMenu";

const Header = () => {
  const t = useTranslations();

  return (
    <StyledHeader>
      <Menu>
        <Image src={logo} alt="" />
        <Nav>
          <Tab>{t("about")}</Tab>
          <Tab>{t("services")}</Tab>
          <Tab>{t("contacts")}</Tab>
        </Nav>
        <ToggleMenu />
      </Menu>
      <p>{t("header")}</p>
    </StyledHeader>
  );
};

export default Header;
