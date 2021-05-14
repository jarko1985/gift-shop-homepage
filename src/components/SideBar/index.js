import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Gifts For HER</SidebarLink>
        <SidebarLink to="/">Gifts For HIM</SidebarLink>
        <SidebarLink to="/">Specail Occassions Gifts</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default SideBar;
