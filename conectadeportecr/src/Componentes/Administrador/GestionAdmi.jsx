import React, { useState, useEffect } from "react";
import LlamadosEventos from "../../Servicios/LlamadosEventos";
import LlamadosForo from "../../Servicios/LlamadosForo";
import "../../Estilos/EstilosAdmi/GestiAdm.css";
import "../NavBar"

function GestionAdmi() {
  const [eventos, setEventos] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const usuarioLocal = JSON.parse(localStorage.getItem("usuario")) || {};
  
  

  useEffect(() => {
    async function cargarDatos() {
      try {
        const eventosAPI = await LlamadosEventos.GetEventos();
        const comentariosAPI = await LlamadosForo.GetComentarios();


        const eventosLocal= JSON.parse(localStorage.getItem("eventos"))||[];
        const comentariosLocal = JSON.parse(localStorage.getItem("comentarios"))||[];


        setEventos([...eventosLocal,...eventosAPI]);
        setComentarios([...comentariosLocal,...comentariosAPI]);

      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    }
    cargarDatos();
  }, []);

  return (
    <div className="admin-page">
      <h1>Gestión Administrativa</h1>
      <p>Usuario actual: {usuarioLocal.nombre || "Desconocido"} ({usuarioLocal.tipoUsuario || "Sin tipo"})</p>
      
      <h2>Eventos Publicados</h2>
      <ul>
        {eventos.map(evento => (
          <li key={evento.id}>
            <strong>{evento.titulo}</strong> - {evento.fecha} (Publicado por: {evento.usuario})
          </li>
        ))}
      </ul>
      
      <h2>Comentarios del Foro</h2>
      <ul>
        {comentarios.map(comentario => (
          <li key={comentario.id}>
            <strong>{comentario.usuario}:</strong> {comentario.contenido}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GestionAdmi;
