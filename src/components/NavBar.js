import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { signout } from "../utils/auth";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    signout();
  };

  return (
    <Navbar className="navbar-light bg-light navbar-expand-lg">
      <Container>
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} className="navbar-collapse">
          <ul className="navbar-nav">
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/signin">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/signup">
                Sign up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/private">
                Switch to private component
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" onClick={handleSignOut} to="/">
                Sign out
              </NavLink>
            </NavItem>
          </ul>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
