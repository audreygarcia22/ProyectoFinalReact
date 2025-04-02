import React from 'react'
import { Navigate } from 'react-router-dom'

const RutaPrivada= ({element})=>{

    const UsuarioEncontrado = !!localStorage.getItem("token");
    if (UsuarioEncontrado) {
        return element;
        
    } else {
        return <Navigate to ="/Login"/>;
        
    }
}

export default RutaPrivada