import dialogs from "../../helpers/dialogs";

const { notify } = dialogs();

export function someAction (/* context */) {
}

export function addClientAction ( { commit }, form ) {
    commit( 'addClient', form );
    notify('positive', 'Cliente Agregado Correctamente');
}

export function deleteClientAction ( { commit }, rutClient ) {
    commit( 'deleteClient', rutClient );
    notify('positive', 'Cliente Eliminado Correctamente');
}

export function updateClientAction ( { commit }, form ) {
    commit('updateClient', form);
    notify('positive', 'Cliente Actualizado Correctamente')
}