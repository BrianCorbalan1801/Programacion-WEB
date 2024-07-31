// src/App.js

import React from "react";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Footer from "./Componentes/Footer";
// import "./App.css"; // Puedes tener estilos específicos para App aquí

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
