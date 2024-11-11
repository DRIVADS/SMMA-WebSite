// src/components/TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SMMA.png';
import './TopBar.css';

function TopBar() {
  return (
    <header className="topBar">
      <nav className="nav">
        <img src={logo} alt="Logo" className="logo" />
        <div className="linksContainer">
          <Link to="/" className="link">Inicio</Link>
          <Link to="/about" className="link">Sobre Nosotros</Link>
          <Link to="/contact" className="link">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}

export default TopBar;
