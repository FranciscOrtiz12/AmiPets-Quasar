import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'
import user from '../modules/dashBoard/store/users'
import clients from '../modules/dashBoard/store/clients'
import veterinarios from '../modules/dashBoard/store/veterinarios'
import mascotas from '../modules/dashBoard/store/mascotas'
import controls from '../modules/dashBoard/store/controls'


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
      clients,
      veterinarios,
      mascotas,
      controls,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
