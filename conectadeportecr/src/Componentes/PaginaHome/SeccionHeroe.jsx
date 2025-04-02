import React from 'react';
import "../../Estilos/EstilosHome/Heroe.css";
import { useNavigate } from 'react-router-dom';



function SeccionHeroe() {
  const navigate = useNavigate();

const handleClick = () => {
  navigate("/Login");
};



    
  return (
    <section className="heroe">
      <div className="heroe-contenido">
        <h1>ConectaDeporteCR</h1>
        <p>Uniendo comunidades Educativas a través del Deporte en Costa Rica.</p>
        <button onClick={handleClick}>Inicia Session</button>

      </div>
    </section>
  );
}

export default SeccionHeroe;
