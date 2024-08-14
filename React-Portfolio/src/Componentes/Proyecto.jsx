// src/Projects.js
import React from "react";
import "./Proyecto.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Mis Proyectos Realizados</h1>
      <div className="project-list">
        <div className="project-item">
          <h2>Proyecto React</h2>
          <p>
            Creacion de un React en el cual se pueda convertir el valor de las
            monedas de manera universal
          </p>
        </div>
        <div className="project-item">
          <h2>Proyecto Peliculas</h2>
          <p>
            En este trabajo se ve reflejado los trabajos de manera que se crea
            una pagina donde se puede ver peliculas en cartelera
          </p>
        </div>
        <div className="project-item">
          <h2>Proyecto CV</h2>
          <p>
            En este trabajo se ve un Curriculum Vitae el cual cuenta con todos
            los detalles de mi vida laboral y estudiantil
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
