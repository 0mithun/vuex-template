import  Vue from 'vue'
Vue.use(Vuex)
import  Vuex from 'vuex'
import myAge from './modules/age'
import  myName from './modules/name'
export const store = new Vuex.Store({
    state:{
    },
    getters:{
    },
    mutations:{
    },
    actions:{
    },
    modules:{
        myAge,
        myName
    }

})