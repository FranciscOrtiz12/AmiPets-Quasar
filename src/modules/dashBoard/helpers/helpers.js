import useClientState from '../composables/useClientState';
import dialogs from '../helpers/dialogs'


const { getClients, prueba } = useClientState();
const { notify } = dialogs();




//* FUNCION VERIFICAR SI EL RUT DEL CLIENTE EXISTE
export const verificarRutCLiente = ( rut = null ) => {    
    // La idea de esta funcion, es usar el state de usuarios y asi lograr buscar un cliente por su rut y devolver un true o un false segun corresponda
}


//* FUNCION PARA LIMPIAR FORMULARIOS
export const helpLimpiarFormulario = ( form ) => {
    for( const key in form ) {
        if( key.includes("options") ){}else{
            form[key] = '';
        }
    };

    return form;
}


//* VALIDA SI EL EMAIL ES VALIDO
export const isValidEmail = ( val ) => {
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    return emailPattern.test(val) || 'El correo no parece ser válido';
}


//* GENERA UN ID
export const generateId = () => Math.random().toString(36).substr(2, 18);