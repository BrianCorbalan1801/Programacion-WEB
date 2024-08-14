// src/components/Home.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="project-item project-list">
      <h1>Bienvenido a mi Portafolio</h1>
      <h3>
        Para desplazarte entre las paginas arriba tienes 'Proyectos', 'Contacto'
        e 'Info Personal' en cual puedes clickear para ver mas, si quieres
        volver a esta pagina acuerdate de tocar 'Home'
      </h3>
      <img
        src="https://i.pinimg.com/474x/e1/f2/f4/e1f2f426dcce3d9ce4e4c04f6705180b.jpg"
        alt="Proyecto React"
        className="project-image"
      />
    </div>
  );
};

export default Home;
