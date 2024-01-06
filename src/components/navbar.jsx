import React from "react";
import { useRef } from "react";
import "../stylesheets/navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../images/logo.png";
function NavBar() {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav")
  }
  return (
    <header>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
      <nav className="nav" ref={navRef}>
        <a className="item" href="">About</a>
        <a className="item" href="#">Skills</a>
        <a className="item" href="#">Projects</a>
        <a className="item" href="#">Resume</a>
        <a className="item" href="#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
    </header>
  );
}
export default NavBar;