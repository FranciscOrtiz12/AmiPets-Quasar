import { computed } from 'vue';
import { useStore } from 'vuex';

const userState = () => {

    const store = useStore();

    return {
        // getUsers: computed( () => computed( () => store.getters['user/getUsers'] )),

        // Getters
        getUsers: computed({
           get(){
            return store.getters['user/getUsers']
           },
           set(val){
               console.log({val})
           }
        }),

        // Mutations
        // addUser: ( form ) => store.commit('user/addUser', form),
        // deleteUser: ( userName ) => store.commit('user/deleteUser', userName),
        // updateUser: ( datos ) => store.commit('user/updateUser', datos ),

        // Actions
        addUsers: ( form ) => store.dispatch('user/addUserAct', form),
        deleteUsers: ( userName ) => store.dispatch('user/deleteUserAct', userName),
        updateUsers: ( datos ) => store.dispatch('user/updateUserAct', datos),


    }

};

export default userState