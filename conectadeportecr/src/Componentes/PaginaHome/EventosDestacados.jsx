import React, { useEffect, useState } from 'react';
import "../../Estilos/EstilosHome/Destacados.css";
import LlamadosEventos from '../../Servicios/LlamadosEventos';

function EventosDestacados() {
  const [eventos, setEventos] = useState([]);
   useEffect(() => {
      async function obtenerEventos() {
        try {
          const respuesta = await LlamadosEventos.GetEventos(); 
          setEventos(respuesta);
        } catch (error) {
          console.error('Error al obtener eventos:', error);
        }
      }
      obtenerEventos();
    }, []);
  

  return (
    <section className="eventos-destacados">
      <h2>Eventos Destacados</h2>
      <div className="lista-eventos">
        {eventos.map((evento) => (
          <div key={evento.id} className="evento-item">
             <h3>{evento.nombre}</h3>
             <p>{evento.titulo}</p>
             <p>{evento.fecha}</p>
            <p>Deporte: {evento.deporte}</p>
            <p>Ubicación: {evento.ubicacion}</p>
            
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventosDestacados;