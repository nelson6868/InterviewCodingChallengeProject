import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Footer() {
  return (
    <div className="container">
      <ul class="nav justify-content-end my-3">
        <li class="nav-item">
          <span class="nav-link" as={Link} to="/">
            Products
          </span>
        </li>
        <li class="nav-item">
          <span class="nav-link" as={Link} to="/">
            Pricing
          </span>
        </li>
        <li class="nav-item">
          <span class="nav-link" as={Link} to="/">
            Support
          </span>
        </li>
        <li class="nav-item">
          <span class="nav-link" as={Link} to="/">
            Documentation
          </span>
        </li>
        <li class="nav-item">
          <span
            class="nav-link"
            as={Link}
            to="/"
            style={{
              marginRight: "0px !important",
            }}
          >
            Create Account
          </span>
        </li>
        <li class="nav-item">
          <span class="nav-link" as={Link} to="/">
            <img
              style={{
                width: "40px",
                borderLeft: "1px solid lightgray",
                paddingLeft: "10px",
              }}
              src={logo}
              alt=""
            />
            <IoMdArrowDropdown />
          </span>
        </li>
      </ul>
    </div>
  );
}
