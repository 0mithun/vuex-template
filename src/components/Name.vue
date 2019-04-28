<template>
    <div class="content">
        <h2>Alter name:</h2>
        <input type="text" v-model="name"/>
        <br>
        <md-button
                class="md-dense md-raised md-primary"
                @click="swapName(name)"
        >Swap Name</md-button>
    </div>
</template>


<script>
    import  {mapMutations} from 'vuex'
    import  {mapActions} from 'vuex'
    export default {
        data(){
            return {
                name:''
            }
        },
        methods:{
            // ...mapMutations(['swapName'])
            ...mapActions(['swapName'])
        }
    }

</script>