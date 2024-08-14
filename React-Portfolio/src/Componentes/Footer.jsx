// src/components/Footer.js
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Mi Portafolio - Todos los derechos reservados</p>
      <div className="social-links">
        <a
          href="https://github.com/Briancorbalan1801"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <i className="fab fa-github"></i>
          <FaGithub />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLGJNWhpQmffdPCFGpXBvhcrLsssdxzRSSgRrpztFvPLZRtBQRCSCGjncpWwldDQTFRjV"
          aria-label="Mail"
        >
          <i className="fas fa-envelope"></i>
          <IoIosMail />
        </a>
        <a
          href="https://www.instagram.com/Brxntzz__"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
