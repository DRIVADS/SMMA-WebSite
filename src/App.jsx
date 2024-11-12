// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Monitoreos from './pages/Monitoreos';  // Nueva importación
import Historico from './pages/Historico';    // Nueva importación
import Login from './pages/Login';            // Nueva importación
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/monitoreos" element={<Monitoreos />} />  {/* Nueva ruta */}
        <Route path="/historico" element={<Historico />} />    {/* Nueva ruta */}
        <Route path="/login" element={<Login />} />            {/* Nueva ruta */}
      </Routes>
      <BottomBar />
    </Router>
  );
}

export default App;
