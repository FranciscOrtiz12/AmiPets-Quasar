import dialogs from "../../helpers/dialogs";

export function someAction (/* context */) {
}

const { notify } = dialogs();


export function addControlAct( { commit }, form ) {
    commit('addControl', form);
    notify('positive', 'Control Agendado Correctamente');
}


export function updateControlAct( { commit }, form ) {
    commit('updateControl', form);
    notify('positive', 'Control Actualizado Correctamente');
}


export function deleteControl( { commit }, id ) {
    commit('deleteControl', id);
    notify('positive', 'Control Cancelado Correctamente');
}
