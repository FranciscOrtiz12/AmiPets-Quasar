import { computed } from "vue";
import { useStore } from 'vuex';

const useControlState = () => {

    const store = useStore();

    return {

        //! GETTERS
        getControls: computed({
            get(){
                return store.getters['controls/getControls']
            }
        }),

        //! MUTATIONS

        //! ACTIONS
        addControl: ( form ) => store.dispatch('controls/addControlAct', form),
        updateControl: ( form ) => store.dispatch('controls/updateControlAct', form),
        deleteControl: ( id ) => store.dispatch('controls/deleteControl', id),

    }

}

export default useControlState;