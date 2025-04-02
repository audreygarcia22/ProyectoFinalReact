import React, { useState, useEffect } from 'react';
import LlamadosEventos from '../../Servicios/LlamadosEventos';
import "../../Estilos/EstilosEstudiantes/EventosDisponibles.css";

function ActividadesDestacadas({ usuarioId }) {
  const [eventos, setEventos] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    obtenerEventos();
  }, []);

  async function obtenerEventos() {
    try {
      const respuesta = await LlamadosEventos.GetEventos();
      if (Array.isArray(respuesta)) {
        setEventos(respuesta);
      } else {
        console.error('La respuesta de eventos no es un array');
      }
    } catch (error) {
      console.error('Error al obtener eventos:', error);
    }
  }

  const inscribirseEvento = async (idEvento, cupo) => {
    if (cupo <= 0) {
      setMensaje("No hay cupos disponibles para este evento.");
      return;
    }

    try {
      await LlamadosEventos.InscribirEvento(idEvento, usuarioId);

      // Actualizar eventos después de la inscripción
      obtenerEventos();
      setMensaje(`Te has inscrito exitosamente en el evento.`);
    } catch (error) {
      setMensaje("Error al inscribirse en el evento.");
      console.error("Error en la inscripción:", error);
    }
  };

  return (
    <div>
      <h2>Eventos Deportivos Disponibles</h2>
      {mensaje && <p className="mensaje">{mensaje}</p>}
      {eventos.length === 0 ? (
        <p>No hay eventos disponibles.</p>
      ) : (
        <ul>
          {eventos.map((evento) => (
            <li key={evento.id}>
              <h3>{evento.titulo}</h3>
              <p>Deporte: {evento.deporte}</p>
              <p>Ubicación: {evento.ubicacion}</p>
              <p>Fecha: {evento.fecha}</p>
              <p>Cupo: {evento.cupo > 0 ? evento.cupo : "No hay cupos disponibles"}</p>
              <button
                onClick={() => inscribirseEvento(evento.id, evento.cupo)}
                disabled={evento.cupo <= 0}
              >
                Inscribirse
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActividadesDestacadas;
