"use client";

import { Header as StyledHeader, Menu, Nav, Tab, Container } from "./style";
import Image from "next/image";
import logo from "/public/icons/logo.svg";
import ToggleMenu from "@/components/ToggleMenu";
import Link from "next/link";
import { useEffect, useState } from "react";
import packageJson from "../../../package.json";

interface HeaderProps {
  removeButtons?: boolean;
}

const Header = ({ removeButtons = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const clear = () => {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
      localStorage.clear();
    };
    const { version } = packageJson;
    if (localStorage.getItem("version") !== version) {
      clear();
      localStorage.setItem("version", version);
    }
  }, []);

  return (
    <StyledHeader isOpen={isOpen}>
      <Container>
        <Menu>
          <Link href={"/#hero"} aria-label="link">
            <Image src={logo} alt="" />
          </Link>
          {!removeButtons && (
            <>
              <Nav>
                <Tab href="/#about">About</Tab>
                <Tab href="/#services">Services</Tab>
                <Tab href="#contacts">Contacts</Tab>
              </Nav>
              <ToggleMenu isOpen={isOpen} close={() => handleClose()} />
            </>
          )}
        </Menu>
        <p>Your Journey of Mindful Change for Body and Soul</p>
      </Container>
    </StyledHeader>
  );
};

export default Header;
