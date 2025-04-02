import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LlamadosUser from "../../Servicios/LlamadosUser";
import "../../Estilos/InicioSession/Regist.css";
import "../NavBar"

function FormularioCombinado() {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cargo, setCargo] = useState("");
  const [gradoAcademico, setGradoAcademico] = useState("");
  const [director, setDirector] = useState("");
  const [alcalde, setAlcalde] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [municipalidad, setMunicipalidad] = useState("");
  const [empresa, setEmpresa] = useState("");

  const registerEstudiante = async () => {
    try {
      const users = await LlamadosUser.GetEstudiante();
      const userExists = users.some((user) => user.email === correo);

      if (userExists) {
        alert("Este correo ya está registrado. Redirigiendo al login...");
        navigate("/");
        return;
      }

      await LlamadosUser.PostEstudiante(
        nombre,
        apellidos,
        telefono,
        correo,
        direccion,
        institucion,
        contrasena,
        gradoAcademico,
        identificacion,
        tipoUsuario
      );

      alert("Registro exitoso. Redirigiendo al login...");
      navigate("/");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un problema con el registro. Inténtalo de nuevo.");
    }
  };

  const registerEducador = async () => {
    try {
      const users = await LlamadosUser.GetEducador();
      const userExists = users.some((user) => user.email === correo);

      if (userExists) {
        alert("Este correo ya está registrado. Redirigiendo al login...");
        navigate("/");
        return;
      }

      await LlamadosUser.PostEducador(
        nombre,
        apellidos,
        telefono,
        correo,
        direccion,
        institucion,
        contrasena,
        cargo,
        identificacion,
        tipoUsuario
      );

      alert("Registro exitoso. Redirigiendo al login...");
      navigate("/");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un problema con el registro. Inténtalo de nuevo.");
    }
  };

  const registerInstitucion = async () => {
    try {
      const users = await LlamadosUser.GetInstitucion();
      const userExists = users.some((user) => user.email === correo);

      if (userExists) {
        alert("Este correo ya está registrado. Redirigiendo al login...");
        navigate("/");
        return;
      }

      await LlamadosUser.PostInstitucion(
        telefono,
        correo,
        direccion,
        institucion,
        contrasena,
        director,
        tipoUsuario
      );

      alert("Registro exitoso. Redirigiendo al login...");
      navigate("/");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un problema con el registro. Inténtalo de nuevo.");
    }
  };

  const registerMunicipalidad = async () => {
    try {
      const users = await LlamadosUser.GetMunicipalidad();
      const userExists = users.some((user) => user.email === correo);

      if (userExists) {
        alert("Este correo ya está registrado. Redirigiendo al login...");
        navigate("/");
        return;
      }

      await LlamadosUser.PostMunicipalidad(
        telefono,
        correo,
        direccion,
        municipalidad,
        contrasena,
        alcalde,
        tipoUsuario
      );

      alert("Registro exitoso. Redirigiendo al login...");
      navigate("/");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un problema con el registro. Inténtalo de nuevo.");
    }
  };

  const registerPatrocinador = async () => {
    try {
      const users = await LlamadosUser.GetPatrocinador();
      const userExists = users.some((user) => user.email === correo);

      if (userExists) {
        alert("Este correo ya está registrado. Redirigiendo al login...");
        navigate("/");
        return;
      }

      await LlamadosUser.PostPatrocinador(
        empresa,
        correo,
        telefono,
        direccion,
        contrasena,
        tipoUsuario
      );

      alert("Registro exitoso. Redirigiendo al login...");
      navigate("/");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un problema con el registro. Inténtalo de nuevo.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tipoUsuario) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    switch (tipoUsuario) {
      case "estudiante":
        await registerEstudiante();
        break;
      case "educador":
        await registerEducador();
        break;
      case "institucion":
        await registerInstitucion();
        break;
      case "municipalidad":
        await registerMunicipalidad();
        break;
      case "patrocinador":
        await registerPatrocinador();
        break;
      default:
        alert("Tipo de usuario no válido.");
    }
  };

  const renderCamposEspecificos = () => {
    switch (tipoUsuario) {
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
            <input
              type="text"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
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
            <input
              type="text"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
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
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
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
            <input
              type="text"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </>
        );
      case "municipalidad":
        return (
          <>
            <input
              type="text"
              placeholder="Nombre de la Municipalidad"
              value={municipalidad}
              onChange={(e) => setMunicipalidad(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nombre del Alcalde (Alc.)"
              value={alcalde}
              onChange={(e) => setAlcalde(e.target.value)}
            />
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
            <input
              type="text"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </>
        );
      case "patrocinador":
        return (
          <>
            <input
              type="text"
              placeholder="Nombre de la organización"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />

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
            <input
              type="text"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>ConectaDeporteCR</h1>
      <p>Uniendo comunidades Educativas a través del deporte en Costa Rica.</p> <br /> <br />
      <h2>Formulario de Registro</h2>
      <p>Selecciona el tipo de usuario.</p>

      <select value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)}>
        <option value="selecUser">Tipo de Usuario</option>
        <option value="estudiante">Estudiante</option>
        <option value="educador">Educador</option>
        <option value="institucion">Institución</option>
        <option value="municipalidad">Municipalidad</option>
        <option value="patrocinador">Patrocinador/Donador</option>
      </select>

      {renderCamposEspecificos()}

      <button type="submit">Registrar</button>
    </form>
  );
}

export default FormularioCombinado;
