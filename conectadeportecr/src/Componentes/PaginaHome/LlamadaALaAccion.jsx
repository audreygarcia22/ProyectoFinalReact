import React from 'react';
import "../../Estilos/ALaAccion.css";

function LlamadaALaAccion() {
  return (
    <section className="llamada-accion">
      <h2>¡Únete a la Comunidad Deportiva de Costa Rica!</h2>
      <p>
        Descubre eventos, conecta con instituciones y apoya el deporte local.
      </p>
      <div className="boton boton-registro">
        <button className="boton boton-registro">Regístrate ahora</button>
        <button className="boton boton-explorar">Explorar eventos</button>
      </div>
    </section>
  );
}

export default LlamadaALaAccion;