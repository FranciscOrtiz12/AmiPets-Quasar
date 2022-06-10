import { computed } from 'vue';
import { useStore } from 'vuex';

const useClientState = () => {

    const store = useStore();

    return {        
        // Getters
        getClients: computed({
            get(){
                return store.getters['clients/getClients']
            },
            set(val){
                console.log({val})
            }
        }),

        getValidRut: computed( () => store.getters['clients/getValidRut'] ),
        
        //? Mutations
        invalidRut: ( ) => store.commit('clients/invalidRut'),
        validRut: ( ) => store.commit('clients/validRut'),
        
        //? Actions
        addClient: ( form ) => store.dispatch('clients/addClientAction', form),
        deleteClient: ( rutClient ) => store.dispatch('clients/deleteClientAction', rutClient),
        updateClient: ( form ) => store.dispatch('clients/updateClientAction', form),
        
        
        getClientByRut: (rut) => store.dispatch('clients/getClientByRut', rut),

    }

};

export default useClientState