import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Menu 1");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Brand logo" />
        <p>BrandName</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("Menu 1")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Menu 1
          </Link>
          {menu === "Menu 1" && <hr />}
        </li>
        <li onClick={() => setMenu("Menu 2")}>
          <Link style={{ textDecoration: "none" }} to="/menu-2">
            Menu 2
          </Link>
          {menu === "Menu 2" && <hr />}
        </li>
        <li onClick={() => setMenu("Menu 3")}>
          <Link style={{ textDecoration: "none" }} to="/menu-3">
            Menu 3
          </Link>
          {menu === "Menu 3" && <hr />}
        </li>
        <li onClick={() => setMenu("Menu 4")}>
          <Link style={{ textDecoration: "none" }} to="/menu-4">
            Menu 4
          </Link>
          {menu === "Menu 4" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Log In</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="Cart icon" />
        </Link>
        <div className="nav-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
