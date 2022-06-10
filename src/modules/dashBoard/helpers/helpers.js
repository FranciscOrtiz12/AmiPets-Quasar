//* Funcion que limpia formularios
export const helpLimpiarFormulario = ( form ) => {
    for( const key in form ) {
        if( key.includes("options") ){}else{
            form[key] = '';
        }
    };

    return form;
}



//* Valida si un email es valido
export const isValidEmail = ( val ) => {
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    return emailPattern.test(val) || 'El correo no parece ser válido';
}