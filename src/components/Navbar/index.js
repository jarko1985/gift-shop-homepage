import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavBarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <div>
          <NavLink to="/">Gifts.ae</NavLink>
          <p style={{ color: "#FFF" }}>this site was made by Hassan Jarko</p>
          <p style={{ color: "#FFF" }}>www.hassan.jarko@yahoo.com</p>
          <p style={{ color: "#FFF" }}>
            &copy; Copyright 2021. All Rights Reserved
          </p>
        </div>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
