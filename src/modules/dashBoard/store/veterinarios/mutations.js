export function someMutation (/* state */) {
}

export function addVet ( state, form ) {

    const { nombre, apellidos, rut, especialidad, email, telefono } = form
    const newVet = {
        nombre,
        apellidos,
        rut,
        especialidad,
        email,
        telefono,
    }
    state.veterinarios.push(newVet);
}

export function deleteVet ( state, rut ) {
    const veterinarios = state.veterinarios.filter( u => u.rut !== rut );
    state.veterinarios = veterinarios;    
}

export function updateVet ( state, datos ) {
    const { vetSelected, form } = datos

    const vetsUpdated = state.veterinarios.map( vet => {
        if( vet.rut === vetSelected ) {
            vet.nombre = form.nombre
            vet.apellidos = form.apellidos
            vet.rut = form.rut
            vet.especialidad = form.especialidad
            vet.email = form.email
            vet.telefono = form.telefono
        }

        return vet;
    } )
    state.veterinarios = vetsUpdated;
    
}
