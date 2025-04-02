import React, { useState } from 'react';
import PanelPatrocinadoresDonadores from '../../Componentes/Administrador/PanelPatrocinadoresDonadores'

function PanelPatrocinio() {
  const [tipoDonacion, setTipoDonacion] = useState('economica');
  const [montoDonacion, setMontoDonacion] = useState(0);
  const [materialesDonacion, setMaterialesDonacion] = useState('');
  const [horasDonacion, setHorasDonacion] = useState(0);
  const [mostrarPanelDonadores, setMostrarPanelDonadores] = useState(false);
  const [donacion, setDonacion] = useState({});

  const realizarDonacion = (e) => {
    e.preventDefault();

    const nuevaDonacion = {
      tipo: tipoDonacion,
      monto: montoDonacion,
      materiales: materialesDonacion,
      horas: horasDonacion,
    };

    // Guardamos la donación en el estado
    setDonacion(nuevaDonacion);
    setMostrarPanelDonadores(true);  
  };

  return (
    <div>
      <h2>Panel de Patrocinadores</h2>
      <h3>Realizar Donación</h3>
      <form onSubmit={realizarDonacion}>
        <div>
          <label htmlFor="tipoDonacion">Tipo de Donación:</label>
          <select
            id="tipoDonacion"
            value={tipoDonacion}
            onChange={(e) => setTipoDonacion(e.target.value)}
          >
            <option value="economica">Económica</option>
            <option value="materiales">Materiales</option>
            <option value="tiempo">Tiempo</option>
          </select>
        </div>

        {tipoDonacion === 'economica' && (
          <div>
            <label htmlFor="montoDonacion">Monto:</label>
            <input
              type="number"
              id="montoDonacion"
              value={montoDonacion}
              onChange={(e) => setMontoDonacion(Number(e.target.value))}
            />
          </div>
        )}

        {tipoDonacion === 'materiales' && (
          <div>
            <label htmlFor="materialesDonacion">Materiales:</label>
            <textarea
              id="materialesDonacion"
              value={materialesDonacion}
              onChange={(e) => setMaterialesDonacion(e.target.value)}
            />
          </div>
        )}

        {tipoDonacion === 'tiempo' && (
          <div>
            <label htmlFor="horasDonacion">Horas:</label>
            <input
              type="number"
              id="horasDonacion"
              value={horasDonacion}
              onChange={(e) => setHorasDonacion(Number(e.target.value))}
            />
          </div>
        )}

        <button type="submit">Realizar Donación</button>
      </form>

      {mostrarPanelDonadores && (
        <PanelPatrocinadoresDonadores donacion={donacion} />
      )}
    </div>
  );
}

export default PanelPatrocinio;
