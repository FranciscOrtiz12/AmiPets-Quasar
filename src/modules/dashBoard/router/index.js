export default {

    name: 'dashBoard',
    component: () => import(/* webpackChunkName: "dashBoard" */'../../../modules/dashBoard/layouts/MainLayout.vue'),
    children: [
        {
            path: '',
            name: 'index',
            component: () => import(/* webpackChunkName: "daybooh-no-entry" */'../views/home/IndexPage.vue'),
        },
        {
            path: 'usuarios',
            name: 'usuarios',
            component: () => import(/* webpackChunkName: "daybooh-no-entry" */'../views/usuarios/Usuarios.vue'),
        },
        {
            path: 'clientes',
            name: 'clientes',
            component: () => import(/* webpackChunkName: "daybooh-no-entry" */'../views/clientes/Clientes.vue'),
            // component: () => import(/* webpackChunkName: "daybooh-no-entry" */'../views/clientes/Clientes.vue'),
        },
        {
            path: 'mascotas',
            name: 'mascotas',
            component: () => import(/* webpackChunkName: "daybooh-no-entry" */'../views/mascotas/Mascotas.vue'),
        },
        {
            path: 'veterinarios',
            name: 'veterinarios',
            component: () => import(/* webpackChunkName: "daybooh-no-entry" */'../views/veterinarios/Veterinarios.vue'),
        },
        {
            path: 'control',
            name: 'control',
            component: () => import(/* webpackChunkName: "daybooh-no-entry" */'../views/control/Control.vue'),
        },
        {
            path: 'prueba',
            name: 'prueba',
            component: () => import(/* webpackChunkName: "daybooh-no-entry" */'../../../modules/dashBoard/views/Prueba.vue'),
        },

    ]

}