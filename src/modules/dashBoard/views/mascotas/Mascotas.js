//! Generales
import { defineComponent, ref, watch} from "vue";

//! State
import useMasState from "../../composables/useMasState";
import useClientState from "../../composables/useClientState";

//! Helpers
import { helpLimpiarFormulario,
         isValidEmail,
         generateId } from "../../helpers/helpers";

import dialogs from "../../helpers/dialogs";


export default defineComponent({

  name: 'mascotas',
  
  setup(){

    //! VARIABLES 
    const { dialogoConfirmar, notify } = dialogs();

    const { getMascotas,
            deleteMas,
            addMas,
            updateMas } = useMasState();
            
    const { getClients } = useClientState();


    const selectedTable = ref(); //? Opcion seleccionada en la tabla
    const idMas = ref(null); //? Aqui se almacenara el id de la mascota que queremos actualizar al seleccionarla en el select de update
    const rutDueño = ref();
      
    //! FORMULARIOS 
    const addMasForm = ref({
     id: '',
     rutDue: '',
     nombre: '',
     color: '',
     sexo: '',
     tipo: '',
     size: '',
     edad: '',
     rutValido: false,
    });

    const updateMasForm = ref({
     id: '',
     mascota: idMas,
     optionsSelect: [],
     rutDue: rutDueño,
     nombre: '', // actualiable
     color: '', // actualizable
     sexo: '', // actualizable
     tipo: '',
     size: '', // actualizable
     edad: '', // actualizable
     rutValido: false,
    });


    //! FUNCIONES
    const verificarRut = ( rut, form ) => {    
      // recibimos el rut a evaluar, y desde que formulario
      
      // Buscamos los si el cliente existe a travez de su rut
      const cliente = getClients.value.find( c => c.rut === rut.trim() );
      
      
      if( cliente ){
        // Si el cliente cambiamos el estado en el formulario que nos indique
        if( form === 'add' ) addMasForm.value.rutValido = true;
        if( form === 'update' ){
          // Si el cliente existe y viene del formulario de actualizar, ejecutamos la funcion de listar mascotas
          updateMasForm.value.rutValido = true
          listarMascotas( rut );
        }
      }else{

        ( form === 'add' ) ? addMasForm.value.rutValido = false : updateMasForm.value.rutValido = false;
        notify('warning','Cliente no encontrado en el sistema');
      }

    }

    const listarMascotas = ( rut ) => {
      let opciones = [];
      getMascotas.value.forEach(e => {
        if(e.rutDue === rut){
          opciones.push( { label: e.nombre, value: e.id } );
        }
      })

      updateMasForm.value.optionsSelect = opciones;
      
    };


    async function submitAdd(){
      
      // Verificamos si el rut del dueño es valido
      verificarRut( addMasForm.value.rutDue );

      // Si el rut del dueño no es valido, paramos la ejecucion
      if( !addMasForm.value.rutValido ) return
      
      const { id, rutDue, nombre, color, sexo, tipo, size, edad, rutValido } = addMasForm.value;

      // Verificamos que no hayan campos vacios
      if( rutDue === '' || nombre === '' || color === '' || sexo === '' || tipo === '' || size === '' || edad === '' || rutValido === false ) return
      
      // Le preguntamos al usuario si esta seguro de querer agregar la mascota
      const confirmado = await dialogoConfirmar('Agregar Mascota', '¿Esta seguro de agregar una nueva mascota al sistema?');
      if( !confirmado ) return
      addMasForm.value.id = generateId();

      addMas( addMasForm.value );
      
    };


    async function removeMas(){

      const confirmado = await dialogoConfirmar('Eliminar Mascota', '¿Esta seguro de eliminar la mascota del sistema?');

      if( !confirmado ) return

      deleteMas(selectedTable.value[0].id);
    };


    async function submitUpdate() {
      const form = updateMasForm.value;
      const { rutDue, id, nombre, color, sexo, size, edad } = form;

      if( rutDue === '' || id === '' || nombre === '' || color === '' || sexo === '' || size === '' || edad === '') return 

      const confirmado = await dialogoConfirmar('Actualizar Mascota', '¿Esta seguro de querer actualizar la mascota?');
      

      if( confirmado ) updateMas( {id, nombre, color, sexo, size, edad} );

    };


    watch( rutDueño, ( newVal ) => { 

      // Si no tenemos nada, se ocultara el select y reseteara las opciones
      if( !newVal || newVal === '' || newVal.length <= 8){
        helpLimpiarFormulario( updateMasForm.value );
        updateMasForm.value.optionsSelect = [''];
        updateMasForm.value.rutValido = false;
      }

    });


    //Rellenar el formulario con los datos de la mascota
    watch( idMas, (newVal) => {

        const mascota = getMascotas.value.find( m => m.id === newVal.value );
        if( mascota ){
          
          for( const key in mascota ){
            if( key !== 'rutDue' || key !== 'tipo' ){
              updateMasForm.value[key] = mascota[key];
            }
          }
        }

    });


    return{
      tab: ref('add'), //* Tab Panel en posicion predeterminada
      selectedTable, //* Opcion seleccionada en la tabla
      isValidEmail,
      //! FORMULARIOS
      idMas,
      rutDueño,
      addMasForm,
      updateMasForm,
      removeMas,
      getMascotas,
      verificarRut,
      submitAdd,
      submitUpdate,
      helpLimpiarFormulario,
    }

  }

})