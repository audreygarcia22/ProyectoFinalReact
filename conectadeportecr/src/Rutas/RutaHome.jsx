import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Paginas/Home';
import Registros from '../Paginas/Registros';

function RutaHome() {
  return (
    <>
    <div>
      <Router>
        <Routes>
      
                        

                            
                            <Route path="/" element={<Home/>}/>
                            <Route path="/Registros" element={<Registros/>}/>
                            

                      
                            
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default RutaHome