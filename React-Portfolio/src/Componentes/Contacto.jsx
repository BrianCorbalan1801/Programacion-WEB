// src/Contact.js
import React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div style={styles.contact}>
      <h2>Contactos</h2>
      <form>
        <div style={styles.formGroup}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

const styles = {
  contact: {
    padding: "20px",
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "15px",
  },
};

export default Contacto;
