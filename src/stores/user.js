import { defineStore } from 'pinia';

 export const useUserStore =  defineStore('userStore', {
    // state: () => {
    //     return {

    //     }
    // }
    state: () => ({
        userData: 'eytd@udenar.edu.do'
    }),
    getters: {
        minuscula ( state ) {
            return state.userData.toLowerCase();
        }   
    },
    actions: {
        registerUser( name ){
            this.userData = name;
        }
    }
})