const myAge = {
    state:{
        age:26
    },
    getters:{
        showAge(state){
            return state.age + ' Years Old'
        },
    },
    mutations:{
        addOne(state){
            state.age++
        },
        restOne(state){
            state.age--
        },
    },
    actions:{
        addOne(context) {
            setTimeout(() => {
                context.commit('addOne')
            },3000)
        },
        restOne(context){
            setTimeout(()=>{
                context.commit('restOne')
            } ,3000)
        },
    }
}

export default myAge
