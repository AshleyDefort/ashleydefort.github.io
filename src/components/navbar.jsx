import "../styles/navbar.css";
import logo from "../images/logo.png";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

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
        <a className="item" href="#projects" onClick={closeNav}>
          Projects
        </a>
        <a className="item" href="https://drive.google.com/file/d/1OQr5JuGq-cPx-mzK98bxGWoWzFrxLIX8/view?usp=sharing" target="_blank" onClick={closeNav}>
          Resume
        </a>
        <a className="item" href="#contact" onClick={closeNav}>
          Contact
          <MdArrowOutward />
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
