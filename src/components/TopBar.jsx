// src/components/TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Importar Link de react-router-dom
import logo from '../assets/SMMA.png';
import './TopBar.css';

function TopBar() {
  return (
    <header className="topBar">
      <nav className="nav">
        <img src={logo} alt="Logo" className="logo" />
        <div className="linksContainer">
          <Link to="/" className="link">Inicio</Link>
          <Link to="/monitoreos" className="link">Monitoreos</Link>
          <Link to="/historico" className="link">Histórico</Link>
          <Link to="/about" className="link">Sobre Nosotros</Link>
          <Link to="/contact" className="link">Contacto</Link>
          <Link to="/login" className="link loginLink">Login</Link> {/* Añado la clase loginLink */}
        </div>
      </nav>
    </header>
  );
}

export default TopBar;
