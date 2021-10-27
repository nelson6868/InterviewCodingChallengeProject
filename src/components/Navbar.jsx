import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { IoMdArrowDropdown } from "react-icons/io";

export default function navbar() {
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: "250px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="">
              Support
            </Nav.Link>
            <Nav.Link as={Link} to="">
              Documentation
            </Nav.Link>
            <Nav.Link as={Link} to="">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="">
              Create Account
            </Nav.Link>
            <Navbar.Brand as={Link} to="/">
              <img
                style={{
                  width: "40px",
                  borderLeft: "1px solid lightgray",
                  paddingLeft: "08px",
                }}
                src={logo}
                alt=""
              />
              <IoMdArrowDropdown />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
