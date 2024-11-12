import React from "react";
import "./AboutPage.css"; 

function AboutPage() {
    return (
        <div className="about-container">
            <h1>Acerca de Nosotros</h1>
            <p>
                Bienvenido a <strong>SMMA</strong>, una plataforma diseñada para proporcionar datos sobre contaminantes
                en tiempo real en zonas específicas. Nuestra misión es ayudar a las personas a monitorear la calidad del aire,
                proporcionando información clara y accesible sobre la evolución de los niveles de contaminantes a lo largo del tiempo.
            </p>
            <p>
                Con <strong>SMMA</strong>, puedes:
            </p>
            <ul>
                <li>Ver los contaminantes en tiempo real en tu área y en otras zonas específicas.</li>
                <li>Analizar cómo han cambiado los niveles de contaminación a lo largo del tiempo.</li>
                <li>Tomar decisiones informadas sobre salud y bienestar en base a la calidad del aire.</li>
            </ul>
            <p>
                Nuestro equipo está comprometido con la precisión y la transparencia, y trabajamos continuamente para mejorar
                la calidad de los datos y la experiencia de usuario en nuestra plataforma. Gracias por confiar en <strong>SMMA</strong>
                 para tu monitoreo ambiental.
            </p>
        </div>
    );
}

export default AboutPage;
