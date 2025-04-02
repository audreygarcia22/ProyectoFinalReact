import React, { useState } from 'react';

function FormularioPatrocinio() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarSolicitud = (e) => {
    e.preventDefault();

   
    const solicitud = {
      nombre,
      email,
      telefono,
      mensaje,
    };

    

    // Limpiar el formulario después de enviar la solicitud
    setNombre('');
    setEmail('');
    setTelefono('');
    setMensaje('');
  };

  return (
    <div>
      <h2>¡Conviértete en Patrocinador!</h2>
      <p>
        Ayuda a impulsar el deporte en nuestra comunidad. ¡Tu apoyo es fundamental!
      </p>

      <form onSubmit={enviarSolicitud}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="¿Cómo te gustaría colaborar?"
          />
        </div>

        <button type="submit">Enviar Solicitud</button>
      </form>
    </div>
  );
}

export default FormularioPatrocinio;