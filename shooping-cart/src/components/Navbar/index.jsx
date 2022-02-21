import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarStyled } from "./NavbarStyled";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { carts } = useSelector((state) => state.productReducer);

  return (
    <NavbarStyled>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/carts">
            Cart <span>{carts.length}</span>
          </NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
