import dialogs from '../../helpers/dialogs';

export function someAction (/* context */) {
}

const { notify } = dialogs();

export function addVetAct ( { commit }, form ) {
    commit('addVet', form);
    notify('positive', 'Veterinario Agregado Correctamente');
}

export function deleteVetAct ( { commit }, rut ) {
    commit('deleteVet', rut);
    notify('positive', 'Veterinario Eliminado Correctamente');
}

export function updateVetAct ( { commit }, datos ) {
    commit('updateVet', datos);
    notify('positive', 'Veterinario Actualizado Correctamente');
}
