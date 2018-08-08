<template>
    <div>
        <vue-editor
            :id=id
            class="appup-editor"
            :class="{'border border-danger': state==false }"
            :placeholder=placeholder
            v-model="content"
            @imageAdded="onChange"
        >
        </vue-editor>
    </div>
</template>
<script>
    /**
     * Appup Editor
     * 
     * TODOs:
     * 
     * Testing pending for image upload, table etc..
     */
    export default {
        name: 'appup-editor',
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

            /**
             * Validation state of the component
             */
            state: {
                type: Boolean,
                required: false,
                default: null
            },

            /**
             * Placeholder if needed
             */
            placeholder: {
                type: String,
                required: false,
                default: ''
            },

            /**
             * Value for v-model binding. Not to be binded directly
             */
            value: {
                required: false
            }
        },
        data: function() {
            return {
                content: this.value
            }
        },
        computed: {
            
        },
        methods: {
            onChange(content) {
                this.$emit('input', content)
            }
        }
    };
</script>