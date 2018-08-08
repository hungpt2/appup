<template>
    <div>
        <div class="col-12 p-5 mt-5 text-center" v-show="loading">
            <appup-icon :name="'spinner'" :size="50" :pulse="true"/> 
        </div>
        <div v-show="!loading">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    /**
     * Appup Controller component which can be used to display all 3rd library.
     * 
     * Some things like alert, progress bar, etc.
     */
    import EventBus from '@/eventBus';
    export default {
        name: 'appup-controller',
        props: {

            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false,
            },

            /**
             * Options of alert components.
             */
            alertSuccessOpt: {
                type: String,
                required: false,
            },

            /**
             * Options of spinner.
             */
            spinnerOpts: {
                type: Boolean,
                required: false,
                default: false
            },
            
        },
        mounted() {
            EventBus.$on('startLoading', (payLoad) => {
                this.loading = payLoad
            });
        },
        data: function() {
            return {
                loading: false
            }
        },
        methods: {
        },
    };
</script>
