const myName = {
    state:{
        name:'Francis',
    },
    getters:{
        showName(state){
            return state.name
        }
    },
    mutations:{
        swapName(state, payload){
            state.name = payload
        }
    },
    actions:{
        swapName({commit}, payload){
            setTimeout( () =>{
                commit('swapName', payload)
            }, 3000)
        }
    }
}

export  default myName