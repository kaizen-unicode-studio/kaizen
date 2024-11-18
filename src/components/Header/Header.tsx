import { Header as StyledHeader, Menu, Nav, Tab } from "./style";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { useTranslations } from "next-intl";

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
      </Menu>
      <p>{t("header")}</p>
    </StyledHeader>
  );
};

export default Header;
