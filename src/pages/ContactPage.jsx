import React, { useState } from "react";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log("Datos del formulario:", formData);
    };

    return (
        <div style={styles.container}>
            <h2>Contáctanos</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="subject">Asunto</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ ...styles.input, height: "100px", resize: "vertical" }}
                    />
                </div>
                <button type="submit" style={styles.button}>Enviar</button>
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


export default ContactPage;  // Asegúrate de exportar el componente como 'default'
