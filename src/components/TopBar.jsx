// src/components/TopBar.js
import React from 'react';
import logo from '../assets/SMMA.png';

function TopBar() {
  return (
    <header style={styles.topBar}>
      <nav style={styles.nav}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <div style={styles.linksContainer}>
          <a href="#" style={styles.link}>Inicio</a>
          <a href="#" style={styles.link}>Monitoreos</a>
          <a href="#" style={styles.link}>Sobre Nosotros</a>
          <a href="#" style={styles.link}>Contacto</a>
        </div>
      </nav>
    </header>
  );
}

const styles = {
  topBar: {
    width: '100%',
    padding: '10px 70px',
    backgroundColor: '#239b56', // Color de la barra
    color: 'white', // Color del text
    textAlign: 'left', // Cambia la alineación a la izquierda
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinea el contenido hacia la izquierda
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    height: '50px', // Ajusta el tamaño de la imagen según necesites
    marginRight: '20px',
  },
  linksContainer: {
    display: 'flex',
    gap: '15px', // Espaciado entre los enlaces
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default TopBar;
