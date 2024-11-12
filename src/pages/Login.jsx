// src/pages/Login.jsx
import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap'; // Asegúrate de que la ruta de importación sea correcta
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap si no lo has hecho aún
import './Login.css';  // Tu archivo CSS adicional


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el inicio de sesión, como enviarlo a una API
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        {/* Campo de usuario */}
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        {/* Campo de contraseña */}
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {/* Botón de inicio de sesión */}
        <Button variant="primary" type="submit" className="w-100">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
