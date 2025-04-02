async function GetEventos() {
    try {
        const response = await fetch('http://localhost:3001/eventosDP', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error al obtener eventos');
        }

        return await response.json();
    } catch (error) {
        console.error('Error al obtener eventos:', error);
        throw error;
    }
}

async function PostEventos(deporte, ubicacion, fecha, descripcion, titulo, hora, nivel, cupo, imagen) {
    try {
        const eventoData = { deporte, ubicacion, fecha, descripcion, titulo, hora, nivel, cupo, imagen };

        const response = await fetch("http://localhost:3001/eventosDP", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventoData)
        });

        if (!response.ok) {
            throw new Error('Error al crear evento');
        }

        return await response.json();
    } catch (error) {
        console.error('Error al crear evento:', error);
        throw error;
    }
}

async function UpdateEventos( nombre, deporte, ubicacion, fecha, descripcion, titulo, hora, cupo, imagen, id) {
    try {
        const eventoData = {  nombre, deporte, ubicacion, fecha, descripcion, titulo, hora, cupo, imagen, id };

        const response = await fetch(`http://localhost:3001/eventosDP/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventoData)
        });

        if (!response.ok) {
            throw new Error(`Error al actualizar evento con id ${id}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al actualizar evento:', error);
        throw error;
    }
}

async function DeleteEventos(id) {
    try {
        const response = await fetch(`http://localhost:3001/eventosDP/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar evento con id ${id}`);
        }

        return { message: `Evento con id ${id} eliminado exitosamente` };
    } catch (error) {
        console.error('Error al eliminar evento:', error);
        throw error;
    }
}

// Inscribir usuario a un evento
async function InscribirEvento(idEvento, usuarioId) {
    try {
        const eventoData = { idEvento, usuarioId };
        const response = await fetch(`http://localhost:3001/inscripciones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventoData)
        });

        if (!response.ok) {
            throw new Error(`Error al inscribir usuario en evento ${idEvento}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error al inscribir usuario en evento`, error);
        throw error;
    }
}

//  Obtener lista de inscritos en un evento
async function GetInscripcionesByEvento(idEvento) {
    try {
        const response = await fetch(`http://localhost:3001/inscripciones/${idEvento}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error al obtener inscripciones del evento ${idEvento}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error al obtener inscripciones del evento ${idEvento}:`, error);
        throw error;
    }
}

export default {
    GetEventos,
    PostEventos,
    UpdateEventos,
    DeleteEventos,
    InscribirEvento,
    GetInscripcionesByEvento
};
