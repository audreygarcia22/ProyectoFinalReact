import React, { useState, useEffect } from 'react';
import LlamadosUser from '../../Servicios/LlamadosUser';
import { Link, useNavigate } from 'react-router-dom';
import "../../Estilos/InicioSession/Login.css";


function Login() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [municipalidades, setMunicipalidades] = useState([]);
  const [instituciones, setInstituciones] = useState([]);
  const [patrocinadores, setPatrocinadores] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const datosEstudiantes = await LlamadosUser.GetEstudiante();
        const datosEducadores = await LlamadosUser.GetEducador();
        const datosInstituciones = await LlamadosUser.GetInstitucion();
        const datosMunicipalidades = await LlamadosUser.GetMunicipalidad();
        const datosAdministradores = await LlamadosUser.GetAdministrador();
        const datosPatrocinadores = await LlamadosUser.GetPatrocinador();

        setUsuarios([...datosEstudiantes, ...datosEducadores, ...datosAdministradores]);
        setInstituciones(datosInstituciones);
        setMunicipalidades(datosMunicipalidades);
        setPatrocinadores(datosPatrocinadores);
      } catch (error) {
        console.error("Error obteniendo los datos de usuario", error);
      }
    }

    fetchData();
  }, []);

  function validar() {
    if (!nombreUsuario || !passwordUsuario) {
      alert("Por favor, ingresa tu usuario y contraseña.");
      return;
    }

    console.log("Buscando usuario con nombre:", nombreUsuario);

    let usuarioEncontrado =
      usuarios.find(usuario => usuario.nombre === nombreUsuario) ||
      municipalidades.find(muni => muni.alcalde === nombreUsuario) ||
      instituciones.find(inst => inst.director === nombreUsuario) ||
      patrocinadores.find(patro => patro.empresa === nombreUsuario);

    console.log("Usuario encontrado:", usuarioEncontrado);

    if (usuarioEncontrado) {
      if (usuarioEncontrado.contrasena === passwordUsuario) {
        localStorage.setItem("usuario", JSON.stringify({
          nombre: usuarioEncontrado.administrador || usuarioEncontrado.estudiante ||
            usuarioEncontrado.educador || usuarioEncontrado.alcalde ||
            usuarioEncontrado.director || usuarioEncontrado.nombre,
          tipoUsuario: usuarioEncontrado.tipoUsuario || "desconocido",
          id: usuarioEncontrado.id
        }));

        setNombreUsuario("");
        setPasswordUsuario("");

        switch (usuarioEncontrado.tipoUsuario) {
          case "estudiante":
            navigate("/Estudiante");
            break;
          case "educador":
            navigate("/Educador");
            break;
          case "institucion":
            navigate("/Instituto");
            break;
          case "municipalidad":
            navigate("/");
            break;
          case "administrador":
            localStorage.setItem("token","Usuario-Encontrado")
            navigate("/Admi");

            break;
          case "patrocinador":

            navigate("/Invitado");
            break;
          default:
            alert("Tipo de usuario no reconocido.");
        }
      } else {
        alert("Contraseña incorrecta.");
      }
    } else {
      alert("Usuario no encontrado.");
    }
  }

  return (
    <div className='texto'>
      <h1>ConectaDeporteCR</h1>
      <p>Uniendo comunidades Educativas a través del deporte en Costa Rica.</p> <br /> <br />
      <h2>Inicia Sesión</h2>

      <label className='input'>Usuario</label>
      <input
        id="usuario"
        name="usuario"
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
        placeholder="Usuario"
      />

      <label>Contraseña</label>
      <input
        id="contrasena"
        name="contrasena"
        type="password"
        value={passwordUsuario}
        onChange={(e) => setPasswordUsuario(e.target.value)}
        placeholder="Contraseña"
      />

      <button className='boton' onClick={validar}>Ingresar</button>
      <p>¿No tienes una cuenta? ¡Regístrate! <Link to="/Registros">Inicia aquí</Link></p>
    </div>
  );
}

export default Login;
