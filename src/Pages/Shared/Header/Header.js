import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const { userInfo, setUserInfo, logout } = useContext(AuthContext);
  // theme toggle
  const [theme, setTheme] = useState("light-theme");
  const [toggle, setToggle] = useState(true);
  const toggleTheme = () => {
    if (toggle) {
      setToggle(!toggle);
      setTheme("light-theme");
    } else {
      setToggle(!toggle);
      setTheme("dark-theme");
    }
  };
  //   useEffect(()=>{
  // document.getElementsByClassName=
  //   },[])

  /// Handle log out
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
    >
      <Container>
        <NavLink className="nav-heading-bg d-flex align-items-center" to="/">
          <h5 className="nav-heading ">The Complete React Guideline</h5>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end  mt-lg-0 collapse-nav">
          <Nav className="gap-4 align-items-center nav-item-link">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
              to="/tutorials"
            >
              Tutorials
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
              to="/faq"
            >
              FAQ
            </NavLink> */}
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
              <div className="d-flex gap-3 align-items-center justify-content-end">
                <NavLink onClick={handleSignOut}>Logout</NavLink>
                {/* Tooltip here */}
                {/* <div
                  onClick={() => toggleTheme()}
                  className={`buttn  ${theme}`}
                >
                  {" "}
                  Switch theme
                </div> */}
                {/*  */}
                {/* <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label nab-bar-light"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Default switch checkbox input{" "}
                    <button className="nab-bar-light">button</button>
                  </label>
                </div> */}
                {/*  */}
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center gap-2">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : undefined
                  }
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : undefined
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            )}
            {userInfo?.photoURL ? (
              <div>
                <img
                  style={{ height: "40px", borderRadius: "50%" }}
                  src={userInfo?.photoURL}
                  alt=""
                  title={userInfo?.displayName}
                />
              </div>
            ) : (
              <FaUser
                className="bg-white p-1 rounded-5 "
                style={{ color: "white", fontSize: "1.5em" }}
              ></FaUser>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
