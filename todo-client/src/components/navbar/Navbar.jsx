import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { NavbarStyled } from "./NavbarStyles";

const Navbar = (props) => {
  const { userData } = useSelector((state) => state.auth);
  console.log(userData);
  return (
    <NavbarStyled>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todo">Todo</NavLink>
        </li>
        <li>
          {userData.username ? (
            `Hello ${userData.username}`
          ) : (
            <NavLink to="/auth">Sign In / Register</NavLink>
          )}
        </li>
        <li>{userData.username && `Logout`}</li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
