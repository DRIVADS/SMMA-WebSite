// src/App.js
import React from 'react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

function App() {
  return (
    <div style={styles.appContainer}>
      <TopBar />
      <main style={styles.mainContent}>
        <h1>Bienvenido a mi página web</h1>
        <p>Esta es la sección principal de la página.</p>
      </main>
      <BottomBar />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f0f0f0',
    width: '100%',
    boxSizing: 'border-box',
  },
};

export default App;
