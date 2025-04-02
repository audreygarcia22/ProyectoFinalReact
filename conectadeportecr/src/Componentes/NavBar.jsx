import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../Estilos/EstilosAdmi/EstilosNav.css"

function Navbar() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ConectaDeporteCR</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/Invitado" className="nav-link">Eventos</Link>
        <Link to="/Foro" className="nav-link">Foro</Link>
        <Link to="/Invitado" className="nav-link">Donaciones</Link>

        {usuario ? (
          <>
            {usuario.tipoUsuario === "estudiante" && (
              <Link to="/estudiante" className="nav-link">Mi Espacio</Link>
            )}
            {usuario.tipoUsuario === "educador" && (
              <Link to="/educador" className="nav-link">Panel Educador</Link>
            )}
            {usuario.tipoUsuario === "institucion" && (
              <Link to="/institucion" className="nav-link">Panel Institucional</Link>
            )}
            {usuario.tipoUsuario === "municipalidad" && (
              <Link to="/municipalidad" className="nav-link">Panel Municipalidad</Link>
            )}
            {usuario.tipoUsuario === "administrador" && (
              <Link to="/admi" className="nav-link">Administración</Link>
            )}
            {usuario.tipoUsuario === "patrocinador" && (
              <Link to="/patrocinador" className="nav-link">Mis Patrocinios</Link>
            )}

            <button onClick={cerrarSesion} className="logout-button">
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link">Iniciar sesión</Link>
        )}
      </div>

      <div className="navbar-contact">
      <p>📧 <a href="mailto:contacto@conectadeportecr.com">contacto@conectadeportecr.com</a></p>
      <p>📞 <a href="tel:+50688889999">+506 8888-9999</a></p>
       
      </div>
    </nav>
  );
}

export default Navbar;
