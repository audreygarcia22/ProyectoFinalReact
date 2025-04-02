import React, { useState, useEffect } from 'react';
import LlamadosUser from '../../Servicios/LlamadosUser';
import "../NavBar";
import "../../Estilos/EstilosAdmi/PanelPat.css"

function PanelPatrocinadoresDonadores() {
    const [usuario, setUsuario] = useState(null); // Información del donador
    const [donaciones, setDonaciones] = useState([]);

    // Obtener la información del donador al cargar el componente
    useEffect(() => {
        const usuarioStorage = JSON.parse(localStorage.getItem('usuario'));

        if (usuarioStorage) {
            // Si el usuario está logueado, obtenemos la información del donador
            obtenerDonador(usuarioStorage.id);
        }
    }, []);

    const obtenerDonador = async (usuarioId) => {
        try {
            const donador = await LlamadosUser.GetPatrocinador();
            setUsuario(donador);
            obtenerDonacionesPorUsuario(donador.id);
        } catch (error) {
            console.error('Error obteniendo la información del donador:', error);
        }
    };

    const obtenerDonacionesPorUsuario = async (usuarioId) => {
        try {
            const todasDonaciones = await LlamadosUser.GetPatrocinador();
            const donacionesUsuario = todasDonaciones.filter(donacion => donacion.empresa === usuarioId);
            setDonaciones(donacionesUsuario); // Guardar las donaciones del usuario
        } catch (error) {
            console.error('Error obteniendo las donaciones:', error);
        }
    };

    if (!usuario) {
        return <div>Cargando...</div>; // Mientras se carga la información del usuario
    }

    return (
        <div className='contenedor'>
            <h2> Información de Donaciones</h2>

            <div className='donador'>
                <h3>Datos del Donador</h3>
                <p><strong>Nombre:</strong> {usuario.empresa}</p>
                <p><strong>Correo:</strong> {usuario.email}</p>
                <p><strong>Tipo de Usuario:</strong> {usuario.tipoUsuario}</p>

                {usuario.tipoUsuario === 'patrocinador' && (
                    <>
                        <p><strong>Tipo de Donación:</strong> {usuario.tipoDonacion}</p>
                        <p><strong>Monto Donado:</strong> {usuario.montoDonado} CRC</p>
                    </>
                )}
            </div>

            {/* Mostrar las donaciones realizadas por el donador */}
            <div className='donaciones'>
                <h3>Mis Donaciones</h3>

                {donaciones.length === 0 ? (
                    <p>No has realizado ninguna donación aún.</p>
                ) : (
                    <ul>
                        {donaciones.map((donacion, index) => (
                            <li key={index}>
                                <p><strong>Tipo de Donación:</strong> {donacion.tipo}</p>
                                <p><strong>Usuario:</strong> {donacion.usuarioNombre}</p>
                                {donacion.tipo === 'economica' && <p><strong>Monto:</strong> {donacion.monto}</p>}
                                {donacion.tipo === 'materiales' && <p><strong>Materiales:</strong> {donacion.materiales}</p>}
                                {donacion.tipo === 'tiempo' && <p><strong>Horas:</strong> {donacion.horas}</p>}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default PanelPatrocinadoresDonadores;
