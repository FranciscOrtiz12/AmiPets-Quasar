//! Generales
import { defineComponent, ref, watch, onMounted} from "vue"; 

//! States
import useClientState from "../../composables/useClientState";
import useVetState from "../../composables/useVetState";
import useMasState from "../../composables/useMasState";
import useControlState from "../../composables/useControlState";

//! Helpers
import { helpLimpiarFormulario,
         isValidEmail,
         generateId } from "../../helpers/helpers";

import dialogs from "../../helpers/dialogs";


export default defineComponent({

  name: 'control',
  
  setup(){


    //! UTILS
    const { dialogoConfirmar, notify } = dialogs();
    const { getClients } = useClientState();
    const { getMascotas } = useMasState();
    const { getNombreVets, getVeterinarios } = useVetState();
    const { getControls, addControl, updateControl, deleteControl } = useControlState();

    //! VARIABLES
    const selectedTable = ref(); //* valor seleccionado en tabla
    let controles = [];

    //! FORMULARIOS
    const addControlForm = ref({
      rutCli: '', // Rut del cliente 
      opcionesVeterinarios: '', // Listado de Opciones
      veterinario: '', // Rut del Veterinario
      opcionesMasotas: [], // Listado de Mascotas del cliente indicado
      mascota: '',
      fecha: '', 
      hora: '',
      detalle: '',
      rutValid: false,
    });


    const updateControlForm = ref({
      id: '',
      cliente: {},
      veterinario: '',
      idMas: '',
      tipoServicio: '',
      fecha: '',
      hora: '',
      detalle: '',
      isValidId: ''
    });

    //! FUNCIONES
    //? verifica si el rut existe en el state
    const verificarRut = ( valor ) => {
      const rut = valor.trim();
      const cliente = getClients.value.find( c => c.rut === rut );
      if( cliente ) {
        listarMascotas( rut );
        listarVeterinarios();
        addControlForm.value.rutValid = true;
      } else{
        notify('warning', 'Cliente no encontrado en el sistema');
        addControlForm.value.rutValid = false;
      }
    };

    //? verifica si el id existe en el state
    const verificarId = ( valor ) => {
      const id = valor.trim();
      const control = getControls.value.find( control => control.id === id );
      if( control ) {
        rellenarForm( control );
        listarVeterinarios();
        updateControlForm.value.isValidId = true
      } else{
        notify('warning', 'Control no encontrado en el sistema');
        updateControlForm.value.isValidId = false;
      }
    };

    const rellenarForm = ( control ) => {
      updateControlForm.value.fecha = control.fecha;
      updateControlForm.value.hora = control.hora;
      updateControlForm.value.detalle = control.detalle;
    }
    

    //? Funcion para listar mascotas en select segun el rut del dueño
    const listarMascotas = ( rut ) => {
      let opciones = [];
      getMascotas.value.forEach(e => {
        if(e.rutDue === rut){
          opciones.push( { label: e.nombre, value: e.id } );
        }
      });

      addControlForm.value.opcionesMasotas = opciones;
    };

    //? Funcion para listar veterinarios en select
    const listarVeterinarios = ( ) => {
      let opciones = [];
      getVeterinarios.value.forEach(e => {
        opciones.push( { label: `${ e.nombre } ${ e.apellidos } - ${ e.especialidad }` , value: e.rut } );
      });

      addControlForm.value.opcionesVeterinarios = opciones;
      updateControlForm.value.opcionesVeterinarios = opciones;
    };

    /* function datosCliente(rut) {
      let cadena = '';
      getClients.value.forEach( cliente => {
        if( cliente.rut === rut ) {
          console.log(cliente.nombre)
          cadena = cliente.nombre;
        }
        

        return cadena;
      })
    }
    
    onMounted(() => {
      let newControl = {};
      // al cargar el formulario se deben cargar los datos correctos en la tabla
      getControls.value.forEach( control => {
        // console.log( newControl );
        // console.log( control );

        for (const key in control) {

          if( key === 'rutCliente' ){
            const dato = datosCliente(control[key]);
            console.log('Ded datos', dato);
            // newControl["cliente"] = datosCliente(control[key]);
            // newControl[key] = datosCliente(key);
            continue;
          }
          if( key === 'idPaciente' ){
            newControl[key] = control[key];
            continue;
          }
          if( key === 'rutVeterinario' ){
            newControl[key] = control[key];
            continue;
          }

          newControl[key] = control[key];
        }
        
        controles.unshift( newControl );
      })

      console.log(controles);


    }) */

    const submitAdd = async () => {
      
      // Verificamos que el rut exista
      verificarRut(addControlForm.value.rutCli);
      
      // Comprobamos que el rut ingresado sea valido
      if( !addControlForm.value.rutValid ) return
      
      const { rutCli, veterinario, mascota, fecha, hora, rutValid } = addControlForm.value;

      // verificamos que no tengamos nulos en nuestros datos
      if( rutCli === '' || veterinario === '' || mascota === '' || fecha === '' || hora === '' || rutValid === false ){
        notify('warning', 'Datos incompletos en el formulario o rut invalido');
        return
      }
      
      // Le preguntamos al usuario si desea agregar el control
      const confirmado = await dialogoConfirmar('Agendar Control', '¿Esta seguro de agendar el control en el sistema?');
      if( !confirmado ) return;

      // generamos el id del control
      addControlForm.value.id = generateId();

      // llamamos el action
      addControl( addControlForm.value );
    }

    
    const submitUpdate = async () => {
      // verificamos que exista el control
      verificarId( updateControlForm.value.id );

      // comprobamos que el id sea valido y si exista
      if( !updateControlForm.value.isValidId ) return

      const { id, veterinario, fecha, hora, isValidId} = updateControlForm.value;

      if( id === '' || veterinario === '' || fecha === '' || hora === '' || !isValidId ) {
        console.log(updateControlForm.value);
        notify('warning', 'Datos incompletos en el formulario o id invalido');
        return
      }

      // Le preguntamos al usuario si deasea actualizar
      const confirmado = await dialogoConfirmar('Actualizar Control', '¿Esta seguro de actualizar el control?');
      if( !confirmado ) return;

      // llamamos el action
      updateControl( updateControlForm.value );
      
    }

    const removeControl = async () => {

      const confirmado = await dialogoConfirmar('Cancelar Control', '¿Está seguro de cancelar el control seleccioando?');
      if( !confirmado ) return;

      deleteControl(selectedTable.value[0].id);
      console.log(getControls.value)
    }


    return{
        tab: ref('add'), //* Tab Panel en posicion predeterminada

        // FORMULARIOS
        addControlForm,
        updateControlForm,

        // FUNCIONES
        verificarRut,
        verificarId,

        submitAdd,
        submitUpdate,
        removeControl,

        // GETTER
        getControls,

        selectedTable,


        // FUNCIONAMIENTO DEL DATEPICKER
        myLocale: {
          /* starting with Sunday */
          days: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
          daysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
          months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
          monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
          firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
          format24h: true,
          pluralDay: 'dias'
        }
    }

  }

})