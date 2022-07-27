export function someMutation (/* state */) {
}

//! Mutacion para agregar un cliente al state
export function addClient ( state, form ) {

    const { nombre, apellidos, rut, telefono, email, direccion } = form;
    const newClient = {
        nombre,
        apellidos,
        rut,
        telefono,
        email,
        direccion,
    }
    state.clients.push( newClient );
}

//! Mutacion para eliminar un cliente del state
export function deleteClient( state, rutClient ) {

    const clients = state.clients.filter( c => c.rut !== rutClient );
    state.clients = clients;

}

//! Mutacion para actualizar un cliente en especifico del state
export function updateClient( state, client ){
    const newClientes = state.clients.map( cliente => {

        if( cliente.rut === client.clientToUpdateRut.trim() ){
            
            cliente.nombre = client.nombre,
            cliente.apellidos = client.apellidos,
            cliente.rut = client.rut,
            cliente.telefono = client.telefono,
            cliente.email = client.email,
            cliente.direccion = client.direccion
        }

        return cliente;
    } )
}


//! Modifican el state e indican si el rut ingresado es valido
export function invalidRut( state ) {
    state.validRut = false;
}
export function validRut( state ) {
    state.validRut = true;
}
