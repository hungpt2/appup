<template>
    <codemirror 
        :id=id
        class="appup-code"
        ref="myCm"
        :value="editorCode" 
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange">
    </codemirror>
</template>
<script>
    import { codemirror } from 'vue-codemirror';

    /**
     * Appup Code component to provide code in Html, Js or CSS 
     */
    export default {
        name: 'appup-code',
        props: {
            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false,
            },

            /**
             * Type of Alert Message
             * 
             * `html, js, css`
             */
            type: {
                type: String,
                default: 'html'
            },

            /**
             * Code that should be displayed in the Code Editor
             */
            value: {
                type: String,
                required: true
            }
        },
        data: function() {
            return {
                cmOptions: {
                    mode: 
                        this.type == 'html' ? 'htmlmixed'
                        : this.type == 'js' ? 'text/javascript'
                        : 'text/css',
                    lineNumbers: true,
                    line: true,
                    matchBrackets: true,
                    theme: 'neat'
                },
                editorCode: this.value                
            }
        },
        computed: {
            codemirror() {
                return this.$refs.myCm.codemirror
            }
        },
        mounted() {
            //console.log('Code :: this is current codemirror object', this.codemirror)
        },
        methods: {
            onCmReady(cm) {
                //console.log('Code :: the editor is readied!', cm)
            },
            onCmFocus(cm) {
                //console.log('Code :: the editor is focus!', cm)
            },
            onCmCodeChange(newCode) {
                //console.log('Code :: this is new code', newCode)
                
                this.$emit('input', newCode)             
            }
        },
        components: { 
            codemirror 
        }
    };
</script>