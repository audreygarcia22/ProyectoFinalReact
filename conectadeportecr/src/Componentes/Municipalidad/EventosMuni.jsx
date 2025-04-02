import React, { useState, useEffect } from "react";
import LlamadosEventos from "../../Servicios/LlamadosEventos"; 

function EventosMuni() {
  const [eventos, setEventos] = useState([]);
  const [municipalidadId, setMunicipalidadId] = useState(null); 
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario")); 
    if (usuario && usuario.tipoUsuario === "municipalidad") {
      setMunicipalidadId(usuario.idMunicipalidad); 
    }
  }, []);

  // Obtener eventos para la municipalidad
  useEffect(() => {
    if (!municipalidadId) return; n

    const obtenerEventos = async () => {
      try {
        const response = await LlamadosEventos.GetEventos();
        const eventosMunicipalidad = response.data.filter(
          (evento) => evento.municipalidadId === municipalidadId // Filtramos los eventos por municipalidadId
        );
        setEventos(eventosMunicipalidad);
      } catch (error) {
        console.error("Error al obtener eventos para la municipalidad:", error);
      }
    };

    obtenerEventos();
  }, [municipalidadId]);

  // Crear un nuevo evento (solo para administradores o usuarios específicos, si es necesario)
  const crearEvento = async () => {
    try {
      await LlamadosEventos.PostEventos(deporte, ubicacion, fecha, descripcion, titulo, hora, cupo, imagen);
      setEventos([...eventos, nuevoEvento]);
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Error al crear evento:", error);
    }
  };

  // Eliminar un evento (solo para administradores o usuarios con permisos)
  const eliminarEvento = async (idEvento) => {
    try {
      await LlamadosEventos.DeleteEventos(idEvento);
      setEventos(eventos.filter((evento) => evento.id !== idEvento));
    } catch (error) {
      console.error("Error al eliminar el evento:", error);
    }
  };

  return (
    <div>
      <h2>Eventos de la Municipalidad</h2>

      <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        {mostrarFormulario ? "Cancelar" : "Crear Evento"}
      </button>

      {mostrarFormulario && <FormularioEvento onCrearEvento={crearEvento} />}

      <ul>
        {eventos.length > 0 ? (
          eventos.map((evento) => (
            <li key={evento.id}>
              <h4>{evento.titulo}</h4>
              <p>📅 {evento.fecha} | ⏰ {evento.hora}</p>
              <p>📍 {evento.ubicacion}</p>
              <p>🏅 {evento.deporte}</p>
              <p>📊 Nivel: {evento.nivel}</p>
              <p>🎟️ Cupo: {evento.cupo}</p>
              {evento.imagen && typeof evento.imagen === "string" && (
                <img src={evento.imagen} alt="Imagen del evento" width="150" />
              )}

              {/* Solo mostrar opciones de editar o eliminar si el evento pertenece a esta municipalidad */}
              {evento.municipalidadId === municipalidadId && (
                <>
                  <button>Editar</button>
                  <button onClick={() => eliminarEvento(evento.id)}>Eliminar</button>
                </>
              )}
            </li>
          ))
        ) : (
          <p>No tienes eventos disponibles.</p>
        )}
      </ul>
    </div>
  );
}

export default EventosMuni;
