import React, { useState } from 'react';


function FormularioCombinado() {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState('');
  const [identificacion, setIdentificacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cargo, setCargo] = useState("");
  const [gradoAcademico, setGradoAcademico] = useState("");
  const [director, setDirector] = useState("");
  const [alcalde, setAlcalde] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Lógica para enviar los datos según el tipo de usuario
      // ...
      alert('Registro exitoso');
    } catch (error) {
      alert('Error en el registro');
    }
  };

  const renderCamposEspecificos = () => {
    switch (tipoUsuario) {

      case "administrador":
        return (
          <>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
            <input
              type="text"
              placeholder="No. Identificación"
              value={identificacion}
              onChange={(e) => setIdentificacion(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nombre de la institución"
              value={institucion}
              onChange={(e) => setInstitucion(e.target.value)}
            />

          </>
        );

      case "estudiante":
        return (
          <>

            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
            <input
              type="text"
              placeholder="No. Identificación"
              value={identificacion}
              onChange={(e) => setIdentificacion(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nombre de la institución"
              value={institucion}
              onChange={(e) => setInstitucion(e.target.value)}
            />
            <input
              type="text"
              placeholder="Grado Académico"
              value={gradoAcademico}
              onChange={(e) => setGradoAcademico(e.target.value)}
            />
          </>
        );
      case "educador":
        return (
          <>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
            <input
              type="text"
              placeholder="No. Identificación"
              value={identificacion}
              onChange={(e) => setIdentificacion(e.target.value)}
            />
            <input
              type="text"
              placeholder="Cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nombre de la institución"
              value={institucion}
              onChange={(e) => setInstitucion(e.target.value)}
            />
          </>
        );
      case "institucion":
        return (
          <>
            <input
              type="text"
              placeholder="Nombre de la institucion"
              value={institucion}
              onChange={(e) => setInstitucion(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nombre del Director (A)"
              value={alcalde}
              onChange={(e) => setAlcalde(e.target.value)}
            />
          </>
        );

      case "municipalidad":
        return (
          <>
            <input
              type="text"
              placeholder="Nombre del Alcalde (Alc.)"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />

          </>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)}>
        <option value="administrador">Administrador</option>
        <option value="estudiante">Estudiante</option>
        <option value="educador">Educador</option>
        <option value="institucion">Institución</option>
        <option value="municipalidad">Municipalidad</option>

      </select>

      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="phone"
        placeholder="Telefono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <input
        type="address"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />



      {renderCamposEspecificos()}

      <button type="submit">Registrar</button>
    </form>
  );
}

export default FormularioCombinado;



