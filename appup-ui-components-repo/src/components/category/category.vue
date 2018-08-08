<template>
<div>
   <div v-for="(microapp, index) in microapps" :key="index">
       <h5 class="category-name">{{microapp.name}} <appup-icon name="wrench" class="microapp-settingicon"></appup-icon></h5>
       <p>{{microapp.url}} <appup-icon name="external-link-alt"></appup-icon></p>
       <p>APPS</p>
      <div class="appup-microapp"  v-for="(item, index) in microapp.items" :key="index">
        <appup-image :src="item.src" height="80" width="80" alt="microapp-image"/>
        <appup-star />
        <p>{{item.name}}</p>
     </div>     
    </div>
    </div>
</template>
<script>
    /**
     * Appup category
     * 
     */
    export default {
        name: 'appup-category',        
        props: {
            /**
             * Id of the carousel element
             */
            id:{
                type: String,
                default: ''
            },
            microapps: {
              type: Array,
              required: true,
              default: []
          } 
        },
        data: function() {
            return {                
                microapps:[]
             }
            },
        computed: {
        },       
        mounted() {           
        },
        methods: {           
        }        
    }
</script>