import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Paginas/Home';
import Registros from '../Paginas/Registros';
import Logearse from '../Paginas/Logearse';
import PegeEstudiante from '../Paginas/PegeEstudiante';
import Visitas from '../Paginas/Visitas'
import ForoGeneral from '../Paginas/ForoGeneral';
import Administracion from '../Paginas/Administracion'; 
import Instituciones from '../Paginas/Instituciones';
import PageNavBar from '../Componentes/NavBar'
import PageMuni from '../Paginas/PageMuni';
import RutaPrivada from './RutaPrivada';


function RutaHome() {
  return (
    <>
    <div>
      <Router>
        <Routes>
        
      
                        

                            
                            <Route path="/" element={<Home/>}/>
                            <Route path="/Registros" element={<Registros/>}/>
                            <Route path="/Login" element={<Logearse/>}/>
                            <Route path="/Estudiante" element={<PegeEstudiante/>}/>
                            <Route path="/Invitado" element={<Visitas/>}/>
                            <Route path="/Foro" element={<ForoGeneral />}/>
                            <Route path="/Instituto" element={<Instituciones/>}/>
                            <Route path="/NavBar" element={<PageNavBar/>}/>
                            <Route path="/Muni" element={<PageMuni/>}/>
                            <Route path="/Admi" element={<RutaPrivada element={<Administracion/>}/>}/>

                     

                      
                            
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default RutaHome