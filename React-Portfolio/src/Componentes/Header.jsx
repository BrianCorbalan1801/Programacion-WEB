// src/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Acerca</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="contact-email">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQcsCFqpZwmdxMwppQtVKDQbhTvVXZzTnQCbXvDKfppGDjHfwVXgBLwSLqkmBwgThsnV">
          bcorbalanbenitez@gmail.com
        </a>
      </div>
    </header>
  );
};

export default Header;
