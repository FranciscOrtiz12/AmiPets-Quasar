// Generales
import { defineComponent, ref, watch } from 'vue';

// State
import userState from '../../composables/useUserState';

// Helpers
import { helpLimpiarFormulario, isValidEmail } from '../../helpers/helpers'
import dialogs from '../../helpers/dialogs'



export default defineComponent({
  name: 'usuarios',
  setup() {
    const { dialogoConfirmar } = dialogs();
    const { getUsers, addUsers, deleteUsers, updateUsers } = userState();

    const selectedTable = ref() // Valor seleccionado en la tabla
    let model = ref(null); // Opcion seleccionada en el select de actualizar
    
    let opcionesUser = ref();
    opcionesUser = getUsers.value.map( row  => row.nombreUsuario )

    // Formulario de Agregar
    const addUserForm = ref({
      nombreUsuario: '',
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      contraseña2: '',
      contraseña1: '',
    })
    
    // Formulario de Actualizar
    const updateUserForm = ref({
      optionsSelect: opcionesUser,
      userSelected: model,
      nombreUsuario: '',
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      contraseña2: '',
      contraseña1: '',
    })


    //todo FUNCIONES DEL CRUD
    async function submitAdd(){

      const form = addUserForm.value;
      const { nombreUsuario, nombre, apellido, telefono, email, contraseña1, contraseña2 } = form;

      if( nombreUsuario === '' || nombre === '' || apellido === '' ||  telefono === '' ||  email === '' ||  contraseña1 === '' ||  contraseña1 !== contraseña2 ) return

      const confirmado = await dialogoConfirmar('Agregar Usuario','Esta seguro de agregar un nuevo usuario al sistema?'); // Mensaje emergente
      if( !confirmado ){
        return
      }
      
      addUsers( addUserForm.value );
    }
    async function removeUser(){
      const confirmado = await dialogoConfirmar('Eliminar Usuario', '¿Esta seguro de eliminar el usuario del sistema?');

      if( !confirmado ) return

      deleteUsers( selectedTable.value[0].nombreUsuario ); // Mandamos el nombre de usuario
    }
    async function submitUpdate(){
      const form = updateUserForm.value;
      const { userSelected ,nombreUsuario, nombre, apellido, telefono, email, contraseña1, contraseña2 } = form

      if( userSelected === '' || nombreUsuario === '', nombre === '', apellido === '', telefono === '', email === '', contraseña2 !== contraseña1 ) return

      const confirmado = await dialogoConfirmar('Actuializar Usuario', '¿Esta seguro de querer actualizar el usuario?');

      if( confirmado ) updateUsers( {userSelected, form} );
    }
    

    //* Watch que mapea los datos del usuario seleccionado al formulario
    watch( model, (newVal) => { 
      // Buscamos el los datos del usuario a travez del select
      const user = getUsers.value.find( usuario => usuario.nombreUsuario === newVal );
      for( const key in user ) {
        //Actualizamos los datos del formulario 
        updateUserForm.value[key] = user[key];
      }
    })

    return{
      helpLimpiarFormulario,
      dialogoConfirmar,
      tab: ref('add'), //* Tab Panel en posicion predeterminada
      getUsers, //* Listado de Usuarios desde Vuex

      addUserForm, //* Formulario de Agregar
      updateUserForm, //* Formulario de Actualizacion
      
      model, //* Opcion seleccionada en el select de actualizar

      selectedTable,  //* Opcion seleccionada en la tabla

      isValidEmail, //? Funcion que verifica si un crreo es valido

      submitAdd, //? Funcion que agrega nuevos Usuarios
      removeUser, //? Funcion que elimina un usuario
      submitUpdate, //? Funcion que actualiza un usuario
    }

  }
})