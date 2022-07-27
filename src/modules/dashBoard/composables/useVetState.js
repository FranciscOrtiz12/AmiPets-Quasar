import { computed } from "vue";
import { useStore } from 'vuex';

const useVetState = () => {

    const store = useStore();

    return {

        //! GETTERS
        getVeterinarios: computed({
            get(){
             return store.getters['veterinarios/getVeterinarios']
            },
            set(val){
                console.log({val})
            }
         }),
         getNombreVets: computed({
            get(){
             return store.getters['veterinarios/getNombreVets']
            },
         }),


        //! Actions
        addVet : ( form ) => store.dispatch('veterinarios/addVetAct', form),
        deleteVet: ( rut ) => store.dispatch('veterinarios/deleteVetAct', rut),
        updateVet: ( datos ) => store.dispatch('veterinarios/updateVetAct', datos),

    }

}

export default useVetState;