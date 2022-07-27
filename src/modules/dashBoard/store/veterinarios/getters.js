export function someGetter (/* state */) {
}


export function getVeterinarios ( state ) {
    return state.veterinarios
}


export function getNombreVets ( state ) {
    let veterinarios = [];
    state.veterinarios.forEach( e => {
        veterinarios.push(e.nombre)
    });

    return veterinarios

}
