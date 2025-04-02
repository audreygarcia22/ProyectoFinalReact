import React from 'react';
import SeccionHeroe from '../Componentes/PaginaHome/SeccionHeroe';
import SeccionAcercaDe from '../Componentes/PaginaHome/SeccionAcercaDe';
import EventosDestacados from '../Componentes/PaginaHome/EventosDestacados';
import LlamadaALaAccion from '../Componentes/PaginaHome/LlamadaALaAccion';

function Home() {
  return (
    <div >
      <SeccionHeroe />
      <SeccionAcercaDe />
      <EventosDestacados />
      <LlamadaALaAccion />
    </div>
  );
}

export default Home;