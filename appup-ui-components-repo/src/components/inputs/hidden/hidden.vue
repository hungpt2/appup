<template>
  <input 
    :id=id
    class="form-control appup-hidden" 
    type="hidden" 
    />
</template>
<script>
    const prefixCls = 'appup-hidden';

    /**
     * Appup Hidden component to be used to store any data which should be used when submitting form data
     * 
     * TODOs:
     * 
     * Testing
     */
    export default {
        name: 'appup-hidden',
        components: { 
        },
        props: {
            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false
            },
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
