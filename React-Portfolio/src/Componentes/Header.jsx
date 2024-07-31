import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="/path/to/logo.png" alt="River Plate Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
