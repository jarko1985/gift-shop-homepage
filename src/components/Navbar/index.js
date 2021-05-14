import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavBarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Gifts.ae</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
