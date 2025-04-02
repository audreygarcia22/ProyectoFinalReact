
async function GetPatrocinador() {
    try {
        const response = await fetch(`http://localhost:3001/patrocinador`, {
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
async function GetAdministrador() {
    try {
        const response = await fetch(`http://localhost:3001/administrador`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fe   tching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
} async function GetEstudiante() {
    try {
        const response = await fetch(`http://localhost:3001/estudiante`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fe   tching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
async function GetEducador() {
    try {
        const response = await fetch(`http://localhost:3001/educador`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fe   tching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
async function GetInstitucion() {
    try {
        const response = await fetch(`http://localhost:3001/institucion`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fe   tching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
async function GetMunicipalidad() {
    try {
        const response = await fetch(`http://localhost:3001/municipalidad`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fe   tching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

async function PostPatrocinador(empresa, correo, telefono, direccion,  contrasena, tipoUsuario) {
    try {
        const userData = { empresa, correo, telefono,  direccion,  contrasena, tipoUsuario };

        const response = await fetch(`http://localhost:3001/patrocinador`, {
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


async function PostAdministrador(nombre, apellidos, telefono, correo, direccion, contrasena, identificacion, tipoUsuario) {
    try {
        const userData = { nombre, apellidos, telefono, correo, direccion, contrasena, identificacion, tipoUsuario };

        const response = await fetch(`http://localhost:3001/administrador`, {
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

async function PostEstudiante(nombre, apellidos, telefono, correo, direccion, institucion, contrasena, gradoAcademico, identificacion, tipoUsuario) {
    try {
        const userData = { nombre, apellidos, telefono, correo, direccion, institucion, contrasena, gradoAcademico, identificacion, tipoUsuario };

        const response = await fetch(`http://localhost:3001/estudiante`, {
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
async function PostEducador(nombre, apellidos, telefono, correo, direccion, institucion, contrasena, cargo, identificacion, tipoUsuario) {
    try {
        const userData = { nombre, apellidos, telefono, correo, direccion, institucion, contrasena, cargo, identificacion, tipoUsuario };

        const response = await fetch(`http://localhost:3001/educador`, {
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
async function PostInstitucion(telefono, correo, direccion, institucion, contrasena, director, tipoUsuario) {
    try {
        const userData = { telefono, correo, direccion, institucion, contrasena, director, tipoUsuario };

        const response = await fetch(`http://localhost:3001/institucion`, {
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
async function PostMunicipalidad(telefono, correo, direccion, municipalidad, contrasena, alcalde, tipoUsuario) {
    try {
        const userData = { telefono, correo, direccion, municipalidad, contrasena, alcalde, tipoUsuario };

        const response = await fetch(`http://localhost:3001/municipalidad`, {
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

async function UpdatePatrocinador(empresa, correo, telefono, direccion,  contrasena, tipoUsuario, id) {
    try {
        const userData = { empresa, correo, telefono, direccion,  contrasena, tipoUsuario, id };

        const response = await fetch(`http://localhost:3001/patrocinador/${id}`, {
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


async function UpdateAdministrador(nombre, apellidos, telefono, correo, direccion, contrasena, identificacion, tipoUsuario, id) {
    try {
        const userData = { nombre, apellidos, telefono, correo, direccion, contrasena, identificacion, tipoUsuario, id };

        const response = await fetch(`http://localhost:3001/administrador/${id}`, {
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

async function UpdateEstudiante(nombre, apellidos, telefono, correo, direccion, institucion, contrasena, gradoAcademico, identificacion, tipoUsuario, id) {
    try {
        const userData = { nombre, apellidos, telefono, correo, direccion, institucion, contrasena, gradoAcademico, identificacion, tipoUsuario, id };

        const response = await fetch(`http://localhost:3001/estudiante/${id}`, {

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
async function UpdateEducador(nombre, apellidos, telefono, correo, direccion, institucion, contrasena, cargo, identificacion, tipoUsuario, id) {
    try {
        const userData = {nombre, apellidos, telefono, correo, direccion, institucion, contrasena, cargo, identificacion, tipoUsuario, id };

        const response = await fetch(`http://localhost:3001/educador/${id}`, {

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
async function UpdateInstitucion(institucion, director,telefono, correo, direccion, contrasena,  tipoUsuario, id) {
    try {
        const userData = {institucion, director, telefono, correo, direccion,  contrasena,  tipoUsuario, id };

        const response = await fetch(`http://localhost:3000/institucion/${id}`, {
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
async function UpdateMunicipalidad( municipalidad,alcalde, telefono, correo, direccion,  contrasena,  tipoUsuario, id) {
    try {
        const userData = { municipalidad, alcalde, telefono, correo, direccion, contrasena,  tipoUsuario, id };

        const response = await fetch(`http://localhost:3001/municipalidad/${id}`, {

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


async function DeletePatrocinador(id) {
    try {
        const response = await fetch(`http://localhost:3001/patrocinador/${id}`, {
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



async function DeleteAdministrador(id) {
    try {
        const response = await fetch(`http://localhost:3001/administrador/${id}`, {

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
async function DeleteEstudiante(id) {
    try {
        const response = await fetch(`http://localhost:3001/estudiante/${id}`, {

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
async function DeleteEducador(id) {
    try {
        const response = await fetch(`http://localhost:3001/educador/${id}`, {

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
async function DeleteInstitucion(id) {
    try {
        const response = await fetch(`http://localhost:3001/institucion/${id}`, {

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
async function DeleteMunicipalidad(id) {
    try {
        const response = await fetch(`http://localhost:3001/municipalidad/${id}`, {

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

export default {
    GetAdministrador, GetEstudiante, GetEducador, GetInstitucion, GetMunicipalidad, GetPatrocinador,
    PostAdministrador, PostEstudiante, PostEducador, PostInstitucion, PostMunicipalidad, PostPatrocinador,
    UpdateAdministrador, UpdateEstudiante, UpdateEducador, UpdateInstitucion, UpdateMunicipalidad, UpdatePatrocinador,
    DeleteAdministrador, DeleteEstudiante, DeleteEducador, DeleteInstitucion, DeleteMunicipalidad, DeletePatrocinador
};



