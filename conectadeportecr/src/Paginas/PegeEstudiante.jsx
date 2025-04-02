import React from 'react'
import BuscadorEventos from "../Componentes/Estudiante/BuscadorEventos"; 
import EventosDisponibles from "../Componentes/Estudiante/EventosDisponibles";
import NavBar from '../../src/Componentes/NavBar';




function PegeEstudiante() {
  return (
    <div>
      <NavBar/>
      <BuscadorEventos />
      < EventosDisponibles/>
      

    </div>
  )
}

export default PegeEstudiante 