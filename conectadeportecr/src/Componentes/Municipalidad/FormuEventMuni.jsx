import React, { useState } from 'react';

function FormuEventMuni({ onCrearEvento }) {
  const [evento, setEvento] = useState({
    titulo: '',
    descripcion: '',
    fecha: '',
    hora: '',
    ubicacion: '',
    deporte: '',
    nivel: '',
    precio: '',
    cupo: '',
    imagen: null,
  });

  const handleChange = (e) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  const handleImagenChange = (e) => {
    setEvento({ ...evento, imagen: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCrearEvento(evento);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="titulo" value={evento.titulo} onChange={handleChange} placeholder="Título" required />
      <textarea name="descripcion" value={evento.descripcion} onChange={handleChange} placeholder="Descripción" required />
      <input type="date" name="fecha" value={evento.fecha} onChange={handleChange} required />
      <input type="time" name="hora" value={evento.hora} onChange={handleChange} required />
      <input type="text" name="ubicacion" value={evento.ubicacion} onChange={handleChange} placeholder="Ubicación" required />
      <select name="deporte" value={evento.deporte} onChange={handleChange} required>
        <option value="">Selecciona un deporte</option>
        <option value="futbol">Fútbol</option>
        <option value="baloncesto">Baloncesto</option>
        <option value="tenis">Tenis</option>
        {/* Agrega más opciones de deportes */}
      </select>
      <select name="nivel" value={evento.nivel} onChange={handleChange} required>
        <option value="">Selecciona un nivel</option>
        <option value="principiante">Principiante</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </select>
      <input type="number" name="precio" value={evento.precio} onChange={handleChange} placeholder="Precio" required />
      <input type="number" name="cupo" value={evento.cupo} onChange={handleChange} placeholder="Cupo" required />
      <input type="file" name="imagen" onChange={handleImagenChange} accept="image/*" required />
      <button type="submit">Crear Evento</button>
    </form>
  );
}

export default FormuEventMuni;