<template>
    <form-wizard
        title=""
        subtitle=""
        :nextButtonText="nextButtonText"
        :backButtonText="backButtonText"
        :finishButtonText="finishButtonText"
        @on-complete="onComplete"
        :color="color"
        :shape="shape"
        :startIndex="startIndex"
        >
        <template v-for="(item,index) in items">
            <tab-content :title="item.title" :icon="item.icon" :key="index" :before-change="validateFirstStep">               
                <appup-form
                    :formFields="item.formFields"
                />
            </tab-content>
        </template>        
    </form-wizard>
</template>
<script>
    /**
     * Appup Fromwizard
    */
    export default {
        name: 'appup-formwizard',
        components: { 
             
        },
        props: {
            /**
             * Title of the form wizard
             */
            title: {
                type: String,
                default: ''
            },
            /**
             * Sub Title of the form wizard
             */
            subtitle: {
                type: String,
                default: ''
            },
            /**
             * next button of the form wizard
             */
            nextButtonText: {
                type: String,
                default: ''
            },
            /**
             * back button of the form wizard
             */
            backButtonText: {
                type: String,
                default: ''
            },
            /**
             * finish button of the form wizard
             */
            finishButtonText: {
                type: String,
                default: ''
            },
             /**
             * Form items of the form wizard
             */
            items:{
                type: Array,
                default:''
            },
             /**
             * form fields of the form wizard
             */
            formFields: {
                type: String,
                default: ''
            },
            /**
             * Color of the form wizard
             * 
             * circle, border and text color
             */
            color: {
                color: String,
                default:''
            },
            /**
             * Can take one of the following values: 'circle|square|tab`
             */
            shape: {
                type: String,
                default: ''
            },
             /**
             * Index of the initial tab to display, by default it "0"
             */
            startIndex: {
                type: Number,
                default: 0
            },
            /**
             * Icon for the form wizard.
             * Supports themify icons only for now.
             */
            icon: {
                type: String,
                default: ''
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
            onComplete: function(){
                this.$emit('click');
            },
            validateFirstStep() {
            return new Promise((resolve, reject) => {
                this.from.validate((valid) => {
                resolve(valid);
                });
            })
         }
        }
    };
</script>