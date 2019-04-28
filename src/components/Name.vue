<template>
    <div class="content">
        <h2>Alter name:</h2>
        <input type="text" v-model="name"/>
        <br>
        <md-button class="md-dense md-raised md-primary">Swap Name</md-button>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                name:''
            }
        },
        methods:{
            swapName(){

            }
        }
    }

</script>