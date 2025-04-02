import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Estilos/EstilosHome/ALaAccion.css";

function LlamadaALaAccion() {

  const navigate = useNavigate();

  const irARegistro = () => {
    navigate("/Registros");
  };

  const irAEventos = () => {
    navigate("/Invitado");
  };





  return (
    <section className="llamada-accion">
      <h2>¡Únete a la Comunidad Deportiva de Costa Rica!</h2>
      <p>
        Descubre eventos, conecta con instituciones y apoya el deporte local.
      </p>
      <div className="boton boton-registro">
      <button onClick={irARegistro}>Registrarse</button>
      <button onClick={irAEventos}>Ver Eventos</button>
       
      </div>
    </section>
  );
}

export default LlamadaALaAccion;