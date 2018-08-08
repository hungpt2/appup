<template>
    <b-badge 
        :id="id"
        :variant="badgeVarient"
        :href="href"
        :pill=badgeRounded
    >
    {{label}}
    </b-badge>
</template>
<script>
    import _ from 'lodash';
    const acceptedStyles = ['primary', 'secondary', 'success', 'warning', 'danger', 'light'];
    
    /**
     * Appup Badge
    */
    export default {
        name: 'appup-badge',
        components: { 
             
        },
        props: {
            /**
             * Id of the badge 
             */
            id: {
                type: String,
                default: ''
            },
            /**
             * Variant color of the badge.
             * 
             * Accepted variants 'primary' ,'secondary','warning','success','danger','light'
             *      
             */
            badgeStyle: {
                type: String,
                default:''
            },
            /**
             * actionable badge
             */
            href: {
                type: String,
                default: ''
            },
            /**
             * label for badge text
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * For rounded badge
             */
            rounded: {
                type: Boolean,
                required: false
            }
        },
        data: function() {
            return {
                label: this.label,
                badgeRounded: this.rounded,
                badgeVarient:
                    _.indexOf(acceptedStyles, this.badgeStyle) != -1 ? this.badgeStyle : 'primary',
              
            }
        },
        computed: {
            
        },
        methods: {
           
        }
    };
</script>
