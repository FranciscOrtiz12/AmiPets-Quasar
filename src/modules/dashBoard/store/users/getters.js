export function someGetter (/* state */) {
}


export function getUsers ( state ) {
    return state.users
}


export function getNombreUsers ( state ) {
    let usuarios = [];
    state.users.forEach( e => {
        usuarios.push(e.nombreUsuario)
    });

    return usuarios

}