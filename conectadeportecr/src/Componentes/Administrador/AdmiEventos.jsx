import React, { useState, useEffect } from "react";
import LlamadosEventos from "../../Servicios/LlamadosEventos";
import "../../Estilos/EstilosAdmi/EventosAdm.css";
import Swal from "sweetalert2";
import "../NavBar"

function AdmiEventos() {
  const [eventos, setEventos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [deporte, setDeporte] = useState("");
  const [nivel, setNivel] = useState("Principiante");
  const [cupo, setCupo] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    async function cargarEventos() {
      try {
        const data = await LlamadosEventos.GetEventos();
        setEventos(data);
      } catch (error) {
        console.error("Error al cargar eventos:", error);
      }
    }
    cargarEventos();
  }, []);

  const handleAgregarEvento = async (e) => {
    e.preventDefault();
    try {
      const nuevoEvento =await LlamadosEventos.PostEventos(
        deporte,
        ubicacion,
        fecha,
        descripcion,
        titulo,
        hora,
        nivel,
        cupo,
        imagen);
      setEventos([...eventos, nuevoEvento]);
      console.log("Evento creado con éxito.");
    } catch (error) {
      console.error("Error al crear el evento:", error);
    }
  };

  const handleEditarEvento = async (evento) => {
    const { value: formValues } = await Swal.fire({
      title: "Editar Evento",
      html: `
        <input id="swal-titulo" class="swal2-input" placeholder="Título" value="${evento.titulo}">
        <input id="swal-deporte" class="swal2-input" placeholder="Deporte" value="${evento.deporte}">
        <input id="swal-ubicacion" class="swal2-input" placeholder="Ubicación" value="${evento.ubicacion}">
        <input id="swal-fecha" type="date" class="swal2-input" value="${evento.fecha}">
        <textarea id="swal-descripcion" class="swal2-textarea" placeholder="Descripción">${evento.descripcion}</textarea>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          id: evento.id,
          titulo: document.getElementById("swal-titulo").value,
          deporte: document.getElementById("swal-deporte").value,
          ubicacion: document.getElementById("swal-ubicacion").value,
          fecha: document.getElementById("swal-fecha").value,
          descripcion: document.getElementById("swal-descripcion").value,
        };
      }
    });

    if (formValues) {
      try {
        await LlamadosEventos.UpdateEventos(evento.id, formValues);
        setEventos(eventos.map((ev) => (ev.id === evento.id ? { ...ev, ...formValues } : ev)));
        Swal.fire("Éxito", "Evento editado correctamente", "success");
      } catch (error) {
        Swal.fire("Error", "No se pudo actualizar el evento", "error");
        console.error("Error al editar evento:", error);
      }
    }
  };

  const handleEliminarEvento = async (id) => {
    try {
      await LlamadosEventos.DeleteEventos(id);
      setEventos(eventos.filter((evento) => evento.id !== id));
      Swal.fire("Eliminado", "Evento eliminado correctamente", "success");
    } catch (error) {
      Swal.fire("Error", "No se pudo eliminar el evento", "error");
      console.error("Error al eliminar evento:", error);
    }
  };

  const cargarImagen = (e) => {
    const reader = new FileReader();
    reader.onload = () => setImagen(reader.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="eventos">
      <h2>Gestión de Eventos</h2>
      <form onSubmit={handleAgregarEvento}>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" required />
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
        <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} placeholder="Ubicación" required />
        <select value={deporte} onChange={(e) => setDeporte(e.target.value)} required>
          <option value="">Selecciona un deporte</option>
          <option value="futbol">Fútbol</option>
          <option value="baloncesto">Baloncesto</option>
          <option value="tenis">Tenis</option>
        </select>
        <select value={nivel} onChange={(e) => setNivel(e.target.value)} required>
          <option value="">Selecciona un nivel</option>
          <option value="Principiante">Principiante</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
        <input type="number" value={cupo} onChange={(e) => setCupo(e.target.value)} placeholder="Cupo" required />
        <input type="file" onChange={cargarImagen} accept="image/*" required />
        <button type="submit">Crear Evento</button>
      </form>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            {evento.titulo} - {evento.deporte} - {evento.ubicacion} - {new Date(evento.fecha).toLocaleDateString()} - {evento.descripcion}
            <div className="botones">
              <button onClick={() => handleEditarEvento(evento)}>Editar</button>
              <button onClick={() => handleEliminarEvento(evento.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdmiEventos;
