import { Dialog, Notify } from 'quasar'

//! FUNCION QUE CREA DIALOGOS Y NOTIFICACIONES
const dialogs = () => {

    // Dialogo de cancel o confirm
    const dialogoConfirmar = ( titulo, mensaje ) => {
        return new Promise ( resolve => {
          Dialog.create({
            title: titulo,
            message: mensaje,
            cancel: true,
            persistent: true
          }).onOk(() => {
            resolve(true)
          }).onCancel(() => {
            resolve(false)
          })
        })
    }

    const notify = ( type, text ) => {
      Notify.create({
        type: type,
        message: text
      })
    }

    return {
        dialogoConfirmar,
        notify
    }
}

export default dialogs