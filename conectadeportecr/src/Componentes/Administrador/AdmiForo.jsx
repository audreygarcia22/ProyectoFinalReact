import React, { useState, useEffect } from "react";
import LlamadosForo from "../../Servicios/LlamadosForo";
import "../../Estilos/EstilosAdmi/foroAdm.css";
import "../NavBar";


const AdmiForo = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [comentarioEditado, setComentarioEditado] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarComentarios();
  }, []);



  const cargarComentarios = async () => {
    try {
      const data = await LlamadosForo.GetComentarios();
      setComentarios(data);
      setError(null);
    } catch (err) {
      console.error("Error al cargar comentarios:", err);
      setError("Error al cargar comentarios.");
    }
  };

  const agregarComentario = async () => {
    if (!nuevoComentario.trim()) return;
    try {
      await LlamadosForo.PostComentarios(nuevoComentario, new Date().toISOString());
      setNuevoComentario("");
      cargarComentarios();
    } catch (err) {
      console.error("Error al agregar comentario:", err);
      setError("Error al agregar comentario.");
    }
  };

  const eliminarComentario = async (id) => {
    try {
      await LlamadosForo.DeleteComentarios(id);
      setComentarios(comentarios.filter((comentario) => comentario.id !== id));
    } catch (err) {
      console.error("Error al eliminar comentario:", err);
      setError("Error al eliminar comentario.");
    }
  };

  const editarComentario = async (id) => {
    if (!comentarioEditado[id]?.trim()) return;
    try {
      await LlamadosForo.UpdateComentarios(id, comentarioEditado[id]);
      setComentarios(
        comentarios.map((comentario) =>
          comentario.id === id ? { ...comentario, contenido: comentarioEditado[id] } : comentario
        )
      );
      setComentarioEditado({ ...comentarioEditado, [id]: "" });
    } catch (err) {
      console.error("Error al editar comentario:", err);
      setError("Error al editar comentario.");
    }
  };

  return (
    <div className="foro-administrador">
      <h2>Foro de Administración de Comentarios</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <h3>Agregar Comentario</h3>
        <input
          type="text"
          placeholder="Nuevo comentario"
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
        />
        <button onClick={agregarComentario}>Agregar</button>
      </div>

      <h3 className="comentarios">Comentarios</h3>
      {["Estudiante", "Educador", "Administrador", "Institucion", "Municipalidad"].map((tipoUsuario) => (
        <div key={tipoUsuario}>
          <h4>{tipoUsuario}s</h4>
          <ul>
            {comentarios
              .filter((comentario) => comentario.tipoUsuario === tipoUsuario)
              .map((comentario) => (
                <li key={comentario.id}>
                  <strong>{comentario.usuario}:</strong> {comentario.contenido}
                  <input
                    type="text"
                    placeholder="Editar comentario"
                    value={comentarioEditado[comentario.id] || ""}
                    onChange={(e) =>
                      setComentarioEditado({ ...comentarioEditado, [comentario.id]: e.target.value })
                    }
                  />
                  <button onClick={() => editarComentario(comentario.id)}>Editar</button>
                  <button onClick={() => eliminarComentario(comentario.id)}>Eliminar</button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdmiForo;
