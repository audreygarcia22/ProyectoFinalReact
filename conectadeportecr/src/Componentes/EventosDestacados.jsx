import React from 'react';
import "../Estilos/Destacados.css"

function EventosDestacados() {
  // Aquí iría la lógica para obtener los eventos destacados desde el backend
  const eventos = [
    { id: 1, titulo: 'Torneo de Fútbol Juvenil', fecha: '2024-07-15' },
    { id: 2, titulo: 'Carrera de Ciclismo MTB', fecha: '2024-08-01' },
    // ... más eventos
  ];

  return (
    <section className="eventos-destacados">
      <h2>Eventos Destacados</h2>
      <div className="lista-eventos">
        {eventos.map((evento) => (
          <div key={evento.id} className="evento-item">
            <h3>{evento.titulo}</h3>
            <p>{evento.fecha}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventosDestacados;