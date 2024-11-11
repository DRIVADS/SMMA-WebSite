// src/components/BottomBar.js
import React from 'react';

function BottomBar() {
  return (
    <footer style={styles.bottomBar}>
      <p>&copy; 2024 Mi Página Web. Todos los derechos reservados.</p>
    </footer>
  );
}

const styles = {
  bottomBar: {
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
  },
};

export default BottomBar;
