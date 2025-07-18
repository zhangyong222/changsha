import {defineStore} from "pinia"
export const counterStore = defineStore('mainStore',{
    state: () => {
        return{
            counter: 1,
            name: 'Eduardo',
            isAdmin: true,
        }
    },
    getters:{
        doubleCount(state){
            return state.counter*2
        }
    }
})
