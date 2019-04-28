<template>
<div>
    <md-button 
        class="md-dense md-raised md-primary"
        @click="showNavigation = !showNavigation"
    >
        Raised
    </md-button>

    <md-drawer 
        :md-active.sync="showNavigation"
        :style="{'background':'white'}"
        :md-right="true"
    >
        
        <div class="item">
            Name: <span>  </span>
            <br/>
            Age: <span>  </span>
        </div>
    </md-drawer>
</div>


</template>


<script>
    export default {
        data(){
            return {
                showNavigation:false
            }
        }
    }

</script>