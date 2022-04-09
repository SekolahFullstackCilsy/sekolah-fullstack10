import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../store/actions/auth";
import { userData } from "../../store/constants";
import { NavbarStyled } from "./NavbarStyles";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch(logoutUser());
    history.push("/auth");
  };

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
          {userData && userData.username ? (
            `Hello ${userData.username}`
          ) : (
            <NavLink to="/auth">Sign In / Register</NavLink>
          )}
        </li>
        <li onClick={() => logout()}>
          {userData && userData.username && `Logout`}
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
