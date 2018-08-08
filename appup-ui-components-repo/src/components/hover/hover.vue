<template>
    <div class="appup-hover">
        <div class="component-hover">
            <img 
                :src=src 
                alt="image" 
                class="hover-image" 
            />
            <div class="hover-text">
                <div class="row">
                    <div class="col-md-6" v-for="(item, index) in items" :key="index">
                        <appup-link 
                            :label="item.label"
                            :icon="item.icon"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    /**
     * Appup Image hover effects
     * 
     */
    export default {
        name: 'appup-hover',
        components: { 
             
        },
        props: {
            /**
             * src of image.
             */
            src: {
                type: String,
                default: ''
            },
            /**
             * label for hovering text.
             */
            label: {
                type: String,
                required: false
            },
            /**
             * icon for hovering text.
             */
            icon: {
                type: String,
                required: false
            },
            /**
             * Hovering text items
             */
            items: {
                type: Array
            }
        },
        data: function() {
            return {
                items: []
            }             
        },
        computed: {
            
        },
        methods: {
         
        }        
    };
</script>

