<template>
   <b-breadcrumb :items="items"/>   
</template>
<script>
    /**
     * Appup Breadcrumbs
    */
    export default {
        name: 'appup-breadcrumbs',
        components: { 
             
        },
        props: {
          items: {
              type: Array,
              require: true,
              default: []
          }    
        },
        data: function() {
            return {
            }
        },
        computed: {
            
        },
        methods: {
           
        }
    };
</script>
