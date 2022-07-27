import { computed } from "vue";
import { useStore } from "vuex";

const useMasState = () => {

    const store = useStore();

    return{
        //! GETTERS
        getMascotas: computed({
            get(){
                return store.getters['mascotas/getMascotas']
            },
        set(val){
                console.log({val})
            }
        }),

        //! Mutations

        //! Actions
        addMas: ( form ) => store.dispatch('mascotas/addMasAct', form),
        deleteMas: ( idMas ) => store.dispatch('mascotas/deleteMasAction', idMas),
        updateMas: ( datos ) => store.dispatch('mascotas/updateMasAction', datos),
    }
}

export default useMasState;