export function someMutation (/* state */) {
}


//! Mutacion para agregar un control 
export function addControl( state, form ){
    const { id, rutCli, mascota, veterinario, fecha, hora, detalle } = form
    // Preparamos el objeto a insertar
    const newControl = {
        id,
        rutCliente: rutCli,
        idPaciente: mascota.value,
        rutVeterinario: veterinario.value,
        fecha,
        hora,
        detalle,
    }
    // Agregamos al incio del arreglo
    state.controls.unshift( newControl );
}

//! Mitacion para eliminar un control en especifico
export function deleteControl( state, id) {
    const controls = state.controls.filter( c => c.id !== id )
    console.log(controls);
    state.controls = controls;
}


//! Mutacion para actualizar una mascota en especifico
export function updateControl( state, datos) {
    console.log(datos);
    const { id, veterinario, fecha, hora, detalle } = datos;

    const newControl = state.controls.map( control => {

        if( control.id === id.trim() ){
            control.rutVeterinario = veterinario.value,
            control.fecha = fecha,
            control.hora = hora,
            control.detalle = detalle
        }

        return control;
    });

}
