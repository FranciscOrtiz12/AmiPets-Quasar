export function someMutation (/* state */) {
}

// AGREGA UN USUARIO AL STATE
export function addUser ( state, form ) {
    
    const { nombreUsuario, nombre, apellido, telefono, email, contraseña1 } = form
    const newUser = {
        nombreUsuario,
        nombre,
        apellido,
        telefono,
        email,
        contraseña: contraseña1,
    }
    state.users.push(newUser);
}

// ELIMINAR USUARIO DEL STATE
export function deleteUser ( state, userName ) {
    const users = state.users.filter( u => u.nombreUsuario !== userName );
    state.users = users;
}

// ACTUALIZAR USUARIOS DEL STATE
export function updateUser ( state, datos ) {
    const { userSelected, form } = datos
    const usersUpdated = state.users.map( user => {

        if( user.nombreUsuario === userSelected ) {

            user.nombreUsuario = form.nombreUsuario,
            user.nombre = form.nombre,
            user.apellido = form.apellido,
            user.telefono = form.telefono,
            user.email = form.email

            if( form.contraseña1 !== '' ) user.contraseña = form.contraseña1
        }

        return user;

    })
    state.users = usersUpdated;

}