import React from 'react';
import SeccionHeroe from '../Componentes/SeccionHeroe';
import SeccionAcercaDe from '../Componentes/SeccionAcercaDe';
import EventosDestacados from '../Componentes/EventosDestacados';
import LlamadaALaAccion from '../Componentes/LlamadaALaAccion';

function Home() {
  return (
    <div className="home-container">
      <SeccionHeroe />
      <SeccionAcercaDe />
      <EventosDestacados />
      <LlamadaALaAccion />
    </div>
  );
}

export default Home;