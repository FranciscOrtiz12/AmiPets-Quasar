import dialogs from '../../helpers/dialogs'

export function someAction (/* context */) {
}

const { notify } = dialogs();

export function addUserAct ( { commit }, form ) {
    commit( 'addUser', form );
    notify('positive', 'Usuario Agregado Correctamente');
}
export function deleteUserAct ( { commit }, userName ) {

    commit( 'deleteUser', userName );
    notify('positive', 'Usuario Eliminado Correctamente');
}
export function updateUserAct ( { commit }, datos ) {

    commit( 'updateUser', datos );
    notify('positive', 'Usuario Actualizado Correctamente');
}