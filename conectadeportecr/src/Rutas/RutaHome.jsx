import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Paginas/Home';

function RutaHome() {
  return (
    <>
    <div>
      <Router>
        <Routes>
      
                        

                            
                            <Route path="/" element={<Home/>}/>
                            

                      
                            
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default RutaHome