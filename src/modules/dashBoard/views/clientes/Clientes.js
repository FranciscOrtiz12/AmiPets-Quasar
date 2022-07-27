//* Generales
import { defineComponent, ref } from 'vue'

//* State
import useClientState from '../../composables/useClientState'

//* Helpers
import { helpLimpiarFormulario, isValidEmail } from '../../helpers/helpers'
import dialogs from '../../helpers/dialogs';

export default defineComponent({
  name: 'Clientes',
  setup() {

    //! HERRAMIENTAS
    const { dialogoConfirmar, notify } = dialogs();
    const { getClients,
            getValidRut,
            invalidRut,
            validRut,
            addClient,
            deleteClient,
            updateClient } = useClientState(); //! composable


    //! VARIABLES
    //! table
    const selectedTable = ref(); //* valor seleccionado en tabla

    //! formularios
    const addClientForm = ref({
      nombre: '',
      apellidos: '',
      rut: '',
      telefono: '',
      email: '',
      direccion: '',
    })
    const updateClientForm = ref({
      clientToUpdateRut: '',
      nombre: '',
      apellidos: '',
      rut: '',
      telefono: '',
      email: '',
      direccion: '',
    })

    //! FUNCIONES
    //? verifica si el rut existe en el state
    const verificarRut = ( valor ) => {
      const cliente = getClients.value.find( c => c.rut === valor.trim() );
      return cliente;
    }
    
    //? Verifica el rut y rellena el formulario de actualizar
    const rellenarForm = ( valor ) => {
      const cliente = verificarRut( valor );
      if( cliente ) {
        validRut();
        for( const key in cliente ){
          updateClientForm.value[key] = cliente[key];
        }
      } else {
        invalidRut();
        notify('negative' , 'El Cliente que ha indicado no se encuentra en los registros')
        helpLimpiarFormulario( updateClientForm.value );
        
      }
    }

    //? Agrega Clientes
    async function submitAdd(){
      
      const { nombre, apellidos, rut, telefono, email, direccion } = addClientForm.value
      
      if( nombre === '' || apellidos === '' || rut === '' || telefono === '' || email === '' || direccion === '') return

      
      const confirmado = await dialogoConfirmar('Agregar Cliente', '¿Desea agregar el nuevo cliente al sistema?');
      if( !confirmado ) return

      addClient( addClientForm.value )

    }

    //? Elimina Clientes
    async function removeClient(){
      const confirmado = await dialogoConfirmar('Eliminar Cliente del Sistema', '¿Esta seguro de eliminar al cliente del sistema?');

      if( !confirmado ) return
      
      deleteClient( selectedTable.value[0].rut );

    }

    //? Actualiza Clientes
    async function submitUpdate(){
      const { clientToUpdateRut } = updateClientForm.value 

      const valid = verificarRut(clientToUpdateRut);
      if( !valid ){
        invalidRut();
        return
      }

      const confirmado = await dialogoConfirmar('Actualizar Cliente', '¿Esta seguro de querer actualizar el Cliente?');
      
      if( confirmado ) updateClient(updateClientForm.value)
      

    }
  
    return{
      //! Helpers
      helpLimpiarFormulario,
      isValidEmail,
      
      //! Formularios
      addClientForm,
      updateClientForm,

      //! Utils
      selectedTable, 
      tab: ref('add'),

      //! Funciones
      getValidRut, //? Si el rut es valido, muestra el formulario de actualizar
      rellenarForm,
      getClients, //? Listado de Clientes desde State
      
      submitAdd,
      submitUpdate,
      removeClient,
      
    }

  }
})