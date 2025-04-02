async function GetComentarios() {
    try {
        const response = await fetch('http://localhost:3001/ComentariosForo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

async function PostComentarios( usuario, tipoUsuario, mensaje, fecha) {
    try {
        const userData = {usuario, tipoUsuario, mensaje, fecha};

        const response = await fetch("http://localhost:3001/ComentariosForo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error posting user');
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

async function UpdateComentarios(  usuario, mensaje, fecha, id) {
    try {
        const userData = {  usuario, mensaje, fecha, id };

        const response = await fetch(`http://localhost:3001/ComentariosForo/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Error updating user with id ${id}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

async function DeleteComentarios(id) {
    try {
        const response = await fetch(`http://localhost:3001/ComentariosForo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}


export default { GetComentarios, PostComentarios, UpdateComentarios, DeleteComentarios };
