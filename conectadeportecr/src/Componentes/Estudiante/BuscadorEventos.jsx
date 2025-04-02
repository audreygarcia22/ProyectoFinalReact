import React, { useState, useEffect } from 'react';
import LlamadosEventos from '../../Servicios/LlamadosEventos';

function BuscadorEventos() {
  const [eventos, setEventos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);

  //  Cargar los eventos 
  useEffect(() => {
    cargarEventos();
  }, []);

  const cargarEventos = async () => {
    try {
      const data = await LlamadosEventos.GetEventos(); 
      setEventos(data); // Almacenar todos los eventos
      setResultadosFiltrados(data); // Inicialmente todos los eventos son visibles
    } catch (error) {
      console.error('Error al cargar eventos:', error); // Manejo de errores
    }
  };

  //  Filtrar los eventos según el término de búsqueda
  const manejarCambioBusqueda = (evento) => {
    const termino = evento.target.value; // Obtener el término de búsqueda
    setTerminoBusqueda(termino); // Actualizar el estado del término de búsqueda

    // Filtrar eventos donde el título contenga el término de búsqueda (insensible a mayúsculas/minúsculas)
    const resultados = eventos.filter((e) =>
      e.titulo.toLowerCase().includes(termino.toLowerCase()) // Comparar títulos
    );
    setResultadosFiltrados(resultados); // Actualizar los eventos filtrados
  };

  return (
    <div>
       
      <input
        type="text"
        placeholder="Buscar eventos..."
        value={terminoBusqueda}
        onChange={manejarCambioBusqueda} // Actualizar búsqueda cuando cambia el input
      />
      <ul>
        {resultadosFiltrados.length > 0 ? (
          resultadosFiltrados.map((evento) => (
            <li key={evento.id}>{evento.titulo}</li> // Mostrar los eventos filtrados
          ))
        ) : (
          <p>No se encontraron eventos</p> // Mensaje si no hay eventos que coincidan
        )}
      </ul>
    </div>
  );
}

export default BuscadorEventos;
