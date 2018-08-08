<template>
    <b-button 
        :id=id
        class="appup-link"
        :variant="linkVarient"
        :disabled="disabled"
        v-b-tooltip.hover
        :title="tooltip"
        @click="onLinkClick">
        <template v-if="icon">
            <icon :name="icon"></icon>
        </template>
        {{label}}
    </b-button>
</template>
<script>
    import _ from 'lodash';
    
    const acceptedLinkStyles = ['link'];
    
    /**
     * Appup Link
    */
    export default {
        name: 'appup-link',
        components: { 
             
        },
        props: {
            /**
             * Id of elements.
             */
            id: {
                type: String,
                required: false
            },

            /**
             * Label to be displayed for the link
            */            
             label: {
                type: String,
                default: ''
             },

             /**
             * redirect page
            */            
             linkTo: {
                type: String,
                default: ''
             },
            /**
             * If the button should be disabled or not
             */
             disabled: {
                 type:Boolean,
                 default: false
             },
             /**
             * Fontawesome icon name to be provided
             */
            icon: {
                type: String,
                default: ''
            },
            /**
             * Tooltip to be displayed when mouseover on link
             */
            tooltip: {
                type: String,
                default: ''
            },
             /**
             * Tooltip to be displayed when mouseover on link
             */
            url:{
                type: String,
                default: 'false'
            }
        },
        data: function() {
            return {
                linkVarient:
                    _.indexOf(acceptedLinkStyles, this.linkStyle) != -1 ? this.linkStyle : 'link',                  
            }
        },
        computed: {
            
        },
        methods: {
            onLinkClick: function() {
                if(this.url=="false"){
                 console.log('redirect', this.linkTo)
                this.$emit('click');
                this.$router.push('/' + this.linkTo);
                }else{
                const email= localStorage.getItem("getting-started-email");
                var config = {'email': email};
                    this.$http.post(this.url, config)
                .then(success => {
                    if (callback_success) {
                        callback_success(success, transfer);
                    }
                }, error => {
                    if (callback_error) {
                        callback_error({data: error.response.statusText});
                    }
                });
                }
                
            }
        },          
    };
</script>
