import { navbarRoutes } from "@constants/navbarRoutes";
import React from "react";
import { NavLink } from "react-router-dom";
import * as sc from "../globalStyles";

interface IProps {
  view: number;
}

const NavbarBanner = ({ view }: IProps) => {
  return (
    <sc.Navbar>
      {navbarRoutes[view].map((nav, index) => (
        <h6 key={index}>
          <NavLink
            className={(props) =>
              props.isActive ? "navbar_active_link navbar_item" : "navbar_item"
            }
            to={nav.route}
          >
            {nav.title}
          </NavLink>
        </h6>
      ))}
    </sc.Navbar>
  );
};

export default NavbarBanner;
