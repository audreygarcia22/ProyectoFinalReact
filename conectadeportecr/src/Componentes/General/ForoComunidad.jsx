import React, { useState, useEffect } from "react";
import LlamadosUser from "../../Servicios/LlamadosUser";
import LlamadosForo from "../../Servicios/LlamadosForo";
import "../NavBar"
import  "../../Estilos/InicioSession/FormuComuSty.css"

function ForoComunidad() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [usuarioActual, setUsuarioActual] = useState(null);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        // Obtener usuarios
        const administradores = await LlamadosUser.GetAdministrador();
        const estudiantes = await LlamadosUser.GetEstudiante();
        const educadores = await LlamadosUser.GetEducador();
        const instituciones = await LlamadosUser.GetInstitucion();
        const municipalidades = await LlamadosUser.GetMunicipalidad();

        const usuarios = [
          ...administradores.map((u) => ({ ...u, tipo: "Administrador" })),
          ...estudiantes.map((u) => ({ ...u, tipo: "Estudiante" })),
          ...educadores.map((u) => ({ ...u, tipo: "Educador" })),
          ...instituciones.map((u) => ({ ...u, tipo: "Institución" })),
          ...municipalidades.map((u) => ({ ...u, tipo: "Municipalidad" })),
        ];

        setUsuarioActual(usuarios[1]); // Simulando usuario actual  CAMBIAR POR LOCALHOST


        const comentariosObtenidos = await LlamadosForo.GetComentarios();
        setComentarios(comentariosObtenidos);
      } catch (error) {

      }
    }

    obtenerDatos();
  }, []);

  const agregarComentario = async () => {
    if (nuevoComentario.trim() === "") return; // Validación para evitar comentarios vacíos
    if (!usuarioActual) return; // Validación para evitar agregar comentarios sin usuario
    try {
      const comentarioGuardado = await LlamadosForo.PostComentarios(usuarioActual.nombre, usuarioActual.tipo, nuevoComentario, new Date().toISOString()); // Guardamos el comentario en el servidor
      setComentarios([...comentarios, comentarioGuardado]); // Actualizamos la lista
      setNuevoComentario("");
    } catch (error) {
      console.error("Error al guardar el comentario:", error);
    }
  };

  const eliminarComentario = async (id) => {
    try {
      await LlamadosForo.DeleteComentarios(id);
      setComentarios(comentarios.filter((comentario) => comentario.id !== id));
    } catch (error) {
      console.error("Error al eliminar comentario:", error);
    }
  };

  // Función para formatear la fecha ISO en un formato legible
  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    // Verificamos si la fecha es válida
    if (isNaN(fecha.getTime())) {
      return "Fecha inválida"; // Manejo de error si la fecha no es válida  
    }
    return
    fecha.toLocaleString("es-ES", {
      dateStyle: "short",
      timeStyle: "short",
    });
  };
 

  return (
    <div className="foro-container">
      <h1>Foro Deportivo</h1>
      {usuarioActual && (
        <div className="comentario-input"> 
          <textarea
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
            placeholder="Escribe tu comentario..."
          />
          <button onClick={agregarComentario}>Publicar</button>
        </div>
      )}
      <div className="contenedor-comentarios">
        <h2>Comentarios</h2>
        <ul className="lista-comentarios">
          {comentarios.map((comen, index) => (
            <li key={index} className="comentario">
              <p>
                {comen.usuario} - 
                {comen.tipoUsuario} -
                {comen.mensaje}-{comen.fecha}

              </p>
              <button onClick={() => eliminarComentario(comen.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ForoComunidad;
