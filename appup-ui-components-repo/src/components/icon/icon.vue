<template>
    <icon 
        :id="id"
        class="appup-icon"
        :class="{'fa-spin':spin,
                'fa-pulse': pulse}"
        :name="name"
        :width="size"
        :height="size" >
    </icon>
</template>
<script>
    /**
     * Appup Icon component which can be used to display symbol
     */
    export default {
        name: 'appup-icon',
        props: {

            /**
             * Id of icon elements.
             */
            id: {
                type: String,
                required: false,
            },

            /**
             * Name of symbol to be displayed in the icon
             */
            name: {
                type: String,
                required: true
            },

            /**
             * spin icon
             */
            spin: {
                type: Boolean,
                required: false,
                default: false
            },

            /**
             * pulse icon
             */
            pulse: {
                type: Boolean,
                required: false,
                default: false
            },

            /**
             * Type of Alert Message
             * 
             * `info, warn, success, failure`
             */
            size: {
                type: Number,
                default: 17,
            }
        },
        data: function() {
            return {
                type:  
                    this.alertType === "failure" ? "danger" 
                    : this.alertType === "warn" ? "warning" : this.alertType,
            }
        },
    };
</script>
