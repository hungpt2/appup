<template>
<div>
    <div class="col-12 no-padding" v-show="showError||showSuccess">
        <appup-alert :message="messageAlert" alertType="failure" :show="showError" @dismissed="showError=false"></appup-alert>
        <appup-alert :message="messageAlert" alertType="success" :show="showSuccess" @dismissed="showSuccess=false"></appup-alert>
    </div>
<template>
    <div>
        <b-button v-if="ajax"
            @click="ajaxcall"
            :variant="buttonVarient">
            {{label}}
        </b-button>
        <b-button v-else
            :id=id
            class="appup-button"
            :class="customClass"
            :size="buttonSize" 
            :variant="buttonVarient"
            v-b-tooltip.hover
            :title="tooltip"
            :type="type"
            :style="customStyle"
            :disabled="disabled"
            @click="onButtonClick">
            <template v-if="icon">
                <icon :name="icon"></icon>
            </template>
            {{label}}
        </b-button>     
    </div>
</template>
</div>
</template>
<script>
    import _ from 'lodash';

    const acceptedStyles = ['primary', 'secondary', 'success', 'warning', 'danger', 'light'];
    const acceptedTypes = ['button', 'submit', 'reset'];

    /**
     * Appup Button
     * 
     * `TODOs:` 
     * action - invoke some method, open modal window, navigate to page
     * 
     * navigateTo 
     */
    export default {
        name: 'appup-button',
        props: {
            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false,
            },
            /**
             * Size of the button
             * 
             * `small, medium, large`
             */
            size: {
                type: String,
                default: 'medium'
            },

            /**
             * Style varient of the button
             * 
             * `primary, seconday, success, warning, danger`
             */
            buttonStyle: {
                type: String,
                default: 'primary'
            },

            /**
             * Lavel to be displayed for the button
             */
            label: {
                type: String,
                default: ''
            },

            /**
             * Custom class for button
             */
            customClass: {
                type: String
            },

            /**
             * Custom style for button
             */
            customStyle: {
                type: String,
                default: ''
            },

            /**
             * Tooltip to be displayed when mouseover on it
             */
            tooltip: {
                type: String,
                default: ''
            },

            /**
             * Fontawesome icon name to be provided
             */
            icon: {
                type: String,
                default: ''
            },

            /**
             * Type of the button
             * 
             * `button, submit, reset`
             */
            type: {
                type: String,
                default: 'button'
            },

            /**
             * If the button should be disabled or not
             */
            disabled: {
                type: Boolean,
                default: false
            },

            /**
             * Page/Url it should be navigated to
             * 
             * `
             * Provide url with http / https
             * 
             * Provide name of the Route to which we should be navigated to
             * `
             */
            navigateTo: {
                type: String,
                default: ''
            },
            /**
             * url for api calls
             *
             */
            url:{
                type: String,
                default: ''
            },
             /**
             * Type of the button is true or false
             */
            ajax: {
                type: Boolean,
                required: false,
                default: false
            },
        },
        data: function() {
            return {
                buttonSize: 
                    this.size == "small" ? "sm"
                    : this.size == "large" ? "lg" : '',
                buttonVarient:
                    _.indexOf(acceptedStyles, this.buttonStyle) != -1 ? this.buttonStyle : 'primary',
                buttonType:
                    _.indexOf(acceptedTypes, this.type) != -1 ? this.type : 'button',  
                typeAlert: "failure",
                showSuccess: false,
                showError: false,
                messageAlert: ""                
            }
        },
        watch: { 
            buttonStyle: function(newVal, oldVal) { // watch it
                this.buttonVarient = 
                    _.indexOf(acceptedStyles, this.buttonStyle) != -1 ? this.buttonStyle : 'primary';
            },
            size: function(newVal, oldVal) { // watch it
                console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            }
        },
        mounted() {
        },
        methods: {
            onButtonClick: function() {
                if (this.navigateTo) {
                    this.$router.push(this.navigateTo)
                }
                this.$emit('click');
            },
            ajaxcall: function () {            
                this.$http.get(this.url)
                .then((response)  =>  {                   
                   this.showSuccess = true;
                   this.messageAlert ="Published sucessfully";
                }, (error)  =>  {
                   this.showError = true;
                   this.messageAlert ="Published failed";
                })
            }     
        },
        components: { 
        }
    };
</script>