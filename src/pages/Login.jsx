import React, { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el inicio de sesión
        console.log("Datos del formulario:", formData);
    };

    return (
        <div style={styles.container}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="username">Nombre de Usuario</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Iniciar Sesión</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        minHeight: "100vh", // Cambia "height" por "minHeight"
        backgroundColor: "#f5f5f5"
    },
    form: {
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
        marginTop: "20px" // Ajusta el margen superior para controlar la distancia del menú
    },
    formGroup: {
        marginBottom: "15px"
    },
    input: {
        width: "100%",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        fontSize: "14px",
        backgroundColor: "#ffffff",  // Fondo blanco
        color: "black",              // Texto oscuro
    },
    button: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#62b32a",
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default Login;  // Asegúrate de exportar el componente como 'default'
