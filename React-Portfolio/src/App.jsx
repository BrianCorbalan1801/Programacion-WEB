// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Contacto from "./Componentes/Contacto";
import Proyecto from "./Componentes/Proyecto";
import Info from "./Componentes/Info";
import Footer from "./Componentes/Footer";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Proyecto" element={<Proyecto />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
