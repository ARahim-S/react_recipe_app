import { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Recipe>"}</i>
        <span>best</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/about">
          About
        </MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/">
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
