export function someMutation (/* state */) {
}

export function addMas( state, form ){
    const { id, rutDue, nombre, color, sexo, tipo, size, edad } = form;
    const newMas = {
        id,
        rutDue,
        nombre,
        color,
        sexo,
        tipo,
        size,
        edad
    };
    state.mascotas.push( newMas );
}

export function deleteMas( state, idMas) {
    const mascotas = state.mascotas.filter( m => m.id !== idMas )
    state.mascotas = mascotas;
}


//! Mutacion para actualizar una mascota en especifico
export function updateMas( state, datos) {
    const { id, nombre, sexo, color, edad, size } = datos;

    const newMascotas = state.mascotas.map( mascota => {

        if( mascota.id === id.trim() ){

            mascota.nombre = nombre,
            mascota.sexo = sexo,
            mascota.color = color,
            mascota.edad = edad,
            mascota.size = size

        }

        return mascota;
    });

}
