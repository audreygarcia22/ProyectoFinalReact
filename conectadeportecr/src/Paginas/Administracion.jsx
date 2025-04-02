import React from 'react'
import AdmiEventos from '../Componentes/Administrador/AdmiEventos'
import GestionAdmi from '../Componentes/Administrador/GestionAdmi'
import AdmiForo from '../Componentes/Administrador/AdmiForo'
import PerfilAdministrador from '../Componentes/Administrador/PerfilAdministrador'
import PanelPatrocinadoresDonadores from '../Componentes/Administrador/PanelPatrocinadoresDonadores'
import Navbar from '../Componentes/NavBar'


function Administracion() {
  return (
    <div >
      <Navbar />
      <AdmiEventos />
      <GestionAdmi />
      <AdmiForo />
      <PerfilAdministrador />
      <PanelPatrocinadoresDonadores />


    </div>



  )
}

export default Administracion;
