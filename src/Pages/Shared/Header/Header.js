import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";
import "./Header.css";

const Header = () => {
  const { userInfo, setUserInfo, logout } = useContext(AuthContext);

  /// --1 Handle log out
  const handleSignOut = () => {
    logout()
      .then((result) => {
        toast.success("User logged out!");
        setUserInfo({});
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Navbar
      className="nab-bar  align-items-center"
      collapseOnSelect
      expand="lg"
      // bg="light"
      // variant="light"
    >
      <Container>
        <NavLink to="/">
          <h5 className="nav-heading mt-2">The Complete React Guideline</h5>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="gap-4 align-items-center nav-item-link">
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
            {/* login and register || logout */}
            {userInfo?.uid ? (
              <div className="d-flex gap-3 align-items-center">
                <NavLink onClick={handleSignOut}>Logout</NavLink>
                <NavLink className="d-flex gap-3">
                  <span className="user-name">{userInfo?.displayName}</span>{" "}
                  <div>
                    <img
                      style={{ height: "40px", borderRadius: "50%" }}
                      src={userInfo?.photoURL}
                      alt=""
                    />
                  </div>
                </NavLink>
              </div>
            ) : (
              <div>
                {" "}
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
