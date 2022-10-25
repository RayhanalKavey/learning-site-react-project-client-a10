import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar
      className="nab-bar"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <NavLink to="/">
          <h5>The Complete React Guideline</h5>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
              to="/tutorials"
            >
              Tutorials
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
              to="/faq"
            >
              FAQ
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink>
              <span>{user.displayName}</span>
            </NavLink>
            <NavLink>Logout</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
