//! Generales
import { defineComponent, ref, watch } from 'vue';
    
//! State
import useVetState from '../../composables/useVetState';


//! Helpers
import { helpLimpiarFormulario, isValidEmail } from '../../helpers/helpers'
import dialogs from '../../helpers/dialogs'



export default defineComponent({
  name: 'veterinarios',
  setup() {

    //! VARIABLES
    
    const { dialogoConfirmar } = dialogs();
    const { getVeterinarios, getNombreVets, addVet, deleteVet, updateVet  } = useVetState();

    const selectedTable = ref(); //? Opcion seleccionada en la tabla

    let model = ref(null); //? Opcion seleccionada en el select de actualizar
 
    //! FORMULARIOS
    const addVetForm = ref({
        nombre: '',
        apellidos: '',
        rut: '',
        especialidad: '',
        email: '',
        telefono: '',
      })
      
      const updateVetForm = ref({
        optionsSelect: getNombreVets,
        vetSelected: model,
        nombre: '',
        apellidos: '',
        rut: '',
        especialidad: '',
        email: '',
        telefono: '',
    })

    //todo FUNCIONES
    
    //! Agregar Veterinario
    async function submitAdd(){
        const { nombre, apellidos, rut, especialidad, email, telefono } = 
        addVetForm.value;

        if( nombre === '' || apellidos === '' || rut === '' || especialidad === '' || email === '' || telefono === '' ) return

        const confirmado = await dialogoConfirmar('Agregar Veterinario', '¿Esta seguro de agregar un nuevo veterinario al sistema?');
        if( !confirmado ) return

        addVet( addVetForm.value );
        
    }


    //! Eliminar Veterinario
    async function removeVet(){
      const confirmado = await dialogoConfirmar('Eliminar Veterinario', '¿Esta seguro de elimnar el veterinario del sistema?')
      
      if( !confirmado ) return
      
      deleteVet( selectedTable.value[0].rut );
    }
    

    //! Actualizar Veterinario
    async function submitUpdate(){
      const form = updateVetForm.value;
      const { vetSelected, nombre, apellidos, rut, especialidad, email, telefono } = form;

      if( vetSelected === '' || nombre === '' || apellidos === '' || rut === '' || especialidad === '' || email === '' || telefono === '') return 


      const confirmado = await dialogoConfirmar('Actualizar Veterinario', '¿Esta seguro de querer actualizar el veterinario?');

      if( confirmado ) updateVet( {vetSelected, form} )
    }

    //? Rellena el formulario con los datos del veterinario seleccionado
    watch( model, (newVal) => {

      const veterinario = getVeterinarios.value.find( v => v.rut === newVal )
      for( const key in veterinario ){
        updateVetForm.value[key] = veterinario[key];
      }

    })

    return{
        //! Variables
        selectedTable, //* Valor seleccionado en la tabla
        getVeterinarios, //* Arreglo con los veterinarios
        model, //* Valor seleccionado en el select de actualizar
        
        tab: ref('add'), //* Tab Panel en posicion predeterminada
        
        
        //! FORMULARIOS
        addVetForm,
        updateVetForm,
        
        //! Helpers
        helpLimpiarFormulario,
        isValidEmail,

        //! FUNCIONES
        submitAdd,
        removeVet,
        submitUpdate,
    }

  }
})