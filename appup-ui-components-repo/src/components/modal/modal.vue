<template>
    <b-modal
        :id=id
        :title=title
        :size=modalSize
        :hide-footer=hideFooter
        :ok-only=okOnly
        :ok-title=okLabel
        :cancel-title=cancelLabel
        :centered="Boolean(displayCenter)"
        :header-bg-variant=headerBgVariant
        :header-text-variant=headerTextVariant
        @ok="onProcess"
    >
    <slot></slot>
    </b-modal>
</template>
<script>
    /**
     * Appup Modal with option to display message, confirm or form
     * 
     * Based on type of display, buttons will be displayed.
     * 
     * TODO:
     * > handle ok button when type is confirm - invoking url or function etc..
     * > handle closing the form when the form is submitted upon successful operation.
    */
    export default {
        name: 'appup-modal',
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
             * Title to be displayed in the modal window header
             */
            title: {
                type: String,
                required: true
            },

            /**
             * Size of the modal window
             * 
             * `small, large`
             */
            size: {
                type: String,
                required: false,
                default: 'small'
            },

            /**
             * Type of the modal window that is being opened.
             * 
             * <var>message</var> - Will show message with ok button. 
             * Modal will be closed and nothing else will be performed when clicked on ok.
             * 
             * <var>confim</var> - Will show confimation message with Ok & Cancel button. 
             * URL to invoke on OK should be provided, else Ok will not perform anything.
             * 
             * <var>form</var> - Do not display any buttons for the modal window.
             * Buttons in form should handle form submission and close the modal window upon success 
             */
            type: {
                type: String,
                required: true,
                default: 'message'
            },

            /**
             * Pass text which should be used instead of Ok for ok button
             */
            okLabel: {
                type: String,
                required: false,
                default: 'Ok'
            },

            /**
             * Pass text which should be used instead of Cancel for cancel button
             */
            cancelLabel: {
                type: String,
                required: false,
                default: 'Cancel'
            },

            /**
             * Flag to set if the modal window should be shown in center of the screen
             */
            displayCenter: {
                type: Boolean,
                required: false,
                default: false
            },

            /**
             * Theme to be displayed for header of the modal window
             * 
             * <var>default</var> - No color applied to the header
             * <var>dark</var> - Header will be displayed in dark color with text in light color
             * <var>warn</var> - Header will be displayed in yellow color with text in dark color
             * <var>error</var> - Header will be displayed in red color with text in light color
             * 
             */
            theme: {
                type: String,
                required: false,
                default: 'default'
            }
        },
        data: function() {
            return {
                modalSize:
                    this.size === 'large' ? 'lg' : 'sm',
                hideFooter:
                    this.type === 'form' ? true : false,
                okOnly:
                    this.type === 'message' ? true : false,
                
                // Header variants
                headerBgVariant:
                    this.theme === 'dark' ? 'dark'
                        : this.theme === 'warn' ? 'warning'
                        : this.theme === 'error' ? 'danger'
                        : null,
                headerTextVariant:
                    this.theme === 'dark' ? 'light'
                        : this.theme === 'warn' ? 'dark'
                        : this.theme === 'error' ? 'light'
                        : null,
            }
        },
        computed: {
            
        },
        methods: {
            onProcess() {
                this.$emit('ok')
            }
        },          
    };
</script>
