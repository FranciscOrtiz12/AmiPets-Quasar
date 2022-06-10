import dashBoard from '../modules/dashBoard/router/'

const routes = [
  {
    path: '/',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
  {
    path: '/dashboard',
    ...dashBoard

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
