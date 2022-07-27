import dialogs from "../../helpers/dialogs";

export function someAction (/* context */) {
}

const { notify } = dialogs();


export function addMasAct( { commit }, form ) {
    commit('addMas', form);
    notify('positive', 'Mascota Agregada Correctamente');
}


export function deleteMasAction ( { commit }, idMas ) {
    commit('deleteMas', idMas);
    notify('positive', 'Mascota Elimnada Correctamente');
}

export function updateMasAction( { commit }, datos ) {
    console.log('estos son los datos ',datos)
    commit('updateMas', datos);
    notify('positive', 'Mascota Actualizada Correctamente');

}