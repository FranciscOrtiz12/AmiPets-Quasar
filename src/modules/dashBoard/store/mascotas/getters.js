export function someGetter (/* state */) {
}

export function getMascotas ( state ) { 
    return state.mascotas;
}

export function getMasbyRut ( state, datos ) { 
    console.log(datos);
    return state.mascotas;
}
