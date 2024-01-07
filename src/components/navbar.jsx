import React, { useState } from "react";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const closeNav = () => {
    setIsNavExpanded(false);
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className={isNavExpanded ? "nav expanded" : "nav"}>
        <a className="item" href="#about" onClick={closeNav}>
          About
        </a>
        <a className="item" href="#skills" onClick={closeNav}>
          Skills
        </a>
        <a className="item" href="#" onClick={closeNav}>
          Projects
        </a>
        <a className="item" href="#" onClick={closeNav}>
          Resume
        </a>
        <a className="item" href="#" onClick={closeNav}>
          Contact
        </a>
        <button
          className="nav-btn nav-close-btn"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
