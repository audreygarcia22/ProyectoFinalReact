import React, { useState, useEffect } from 'react';
import LlamadosUser from '../../Servicios/LlamadosUser';
import "../NavBar";
import  "../../Estilos/EstilosAdmi/EstilosNav.css";

export function PerfilAdministrador() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    descripcion: '',
  });
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState('');

  // Obtener los datos del administrador al cargar el componente
  useEffect(() => {
    async function obtenerDatos() {
      try {
        const usuario = await LlamadosUser.GetAdministrador();
        setDatos(usuario); // Cargar los datos obtenidos
      } catch (error) {
        console.error('Error al obtener datos del administrador', error);
        alert('Ocurrió un error al obtener los datos.');
      } finally {
        setCargando(false);
      }
    }
    obtenerDatos();
  }, []);

  // Cambiar datos de los campos del formulario
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  // Validación del formulario
  const validarFormulario = () => {
    if (!datos.nombre || !datos.email) {
      setErrores('Por favor, completa todos los campos requeridos.');
      return false;
    }
    setErrores('');
    return true;
  };

  // Manejo del envío del formulario para actualizar los datos
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      try {
        await LlamadosUser.UpdateAdministrador(datos);
        alert('Perfil actualizado exitosamente');
      } catch (error) {
        console.error('Error al actualizar el perfil', error);
        alert('Ocurrió un error al actualizar el perfil.');
      }
    }
  };

  // Manejo de la eliminación del perfil del administrador
  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar tu perfil?')) {
      try {
        await LlamadosUser.DeleteAdministrador(datos.id);
        alert('Perfil eliminado exitosamente');
        // Limpiar los datos del perfil después de la eliminación
        setDatos({ nombre: '', email: '', telefono: '', descripcion: '' });
        // Redirigir o manejar el flujo después de la eliminación si es necesario
        // Si usas React Router, por ejemplo, podrías redirigir al inicio:
        // navigate('/');
      } catch (error) {
        console.error('Error al eliminar el perfil', error);
        alert('Ocurrió un error al eliminar el perfil.');
      }
    }
  };

  if (cargando) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div>
      <h2>Perfil del Administrador</h2>

      {errores && <p style={{ color: 'red' }}>{errores}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={datos.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Teléfono:</label>
          <input
            name="telefono"
            type="tel"
            value={datos.telefono}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Descripción del Rol:</label>
          <textarea
            name="descripcion"
            value={datos.descripcion}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Guardar cambios</button>
          <button
            type="button"
            onClick={handleDelete}
            style={{ marginLeft: '10px', color: 'red' }}
          >
            Eliminar Perfil
          </button>
        </div>
      </form>
    </div>
  );
}


export default PerfilAdministrador