<template>
<div>
    <!-- Date Component -->
    <template v-if="isDateComponent">
        <appup-datetime
            :id=id
            v-model="inputValue"
            @input="onInput"
            :state="state"
            :type="type"/>
    </template>

    <!-- Hidden Component -->
    <template v-else-if="type == 'hidden'">
        <appup-hidden/>
    </template>

    <!-- Textarea Component -->
    <template v-else-if="type == 'textarea'">
        <appup-textarea
            :id=id
            v-model="inputValue"
            @input="onInput"
            :placeholder=placeholder
            :state="state"
        />
    </template>

    <!-- Editor Component -->
    <template v-else-if="type == 'editor'">
        <appup-editor
            :id=id
            v-model="inputValue"
            @input="onInput"
            :placeholder=placeholder
            :state="state"
        />
    </template>

    <!-- Radio Component -->
    <template v-else-if="type == 'radio'">
        <appup-radio
            :id=id
            :addElement=addElement
            :options=options
            v-model="inputValue"
            @input="onInput"
            :state="state"
            @radioChange="dynamicAddInput"
            />
    </template>

    <!-- Checkbox Component -->
    <template v-else-if="type == 'checkbox'">
        <appup-checkbox
            :id=id
            :addElement=addElement
            :options=options
            v-model="inputValue"
            @input="onInput"
            @checkboxChange="dynamicAddInput"
            :state="state"
        />
    </template>

    <!-- Dropdown Component -->
    <template v-else-if="type == 'dropdown'">
        <appup-dropdown
            :id=id
            :url=url
            :addElement=addElement
            :options=options
            v-model="inputValue"
            @input="onInput"
            :state="state"
            @dropdownChange="dynamicAddInput"
            />
    </template>

    <!-- Multiselect Component -->
    <template v-else-if="type == 'multiselect'">
        <appup-multiselect
            :id=id
            :options=options
            v-model="inputValue"
            @input="onInput"
            :state="state"
            :url=url
            />
    </template>

    <!-- Tags Component -->
    <template v-else-if="type == 'tags'">
        <appup-tags
            :id=id
            :options=options
            v-model="inputValue"
            @input="onInput"
            :state="state"
            :url=url
            />
    </template>

     <!-- File Component -->
    <template v-else-if="type == 'file'">
        <appup-file
            :id=id
            v-model="inputValue"
            @input="onInput"
            :state="state"
            :placeholder=placeholder
            :supportedFormats=supportedFormats
            />
    </template>

     <!-- Html Component -->
    <template v-else-if="type == 'html'">
        <appup-html  :url="url" :isiframe = "isiframe" :width="width" :height = "height"
                 /> 
    </template>
    

   
    <!-- Text Input Component -->
    <template v-else>
        <b-form-input
            :disabled=disabled
            class="appup-input"
            :id=id
            :name=name
            :type=type
            :placeholder=placeholder
            v-model="inputValue"
            @input="onInput"
            :state="state">
        </b-form-input>
    </template>
</div>
</template>
<script>
    import Dropdown from '@/components/inputs/dropdown'

    /**
     * Appup Input - The single component which should be used to render any form element for
     *
     * text, datepicker, password, textarea,code, editor, radio, checkbox, dropdown etc..
     */
    export default {
        name: 'appup-input',
        components: {
            'appup-dropdown': Dropdown
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
             * Name of input elements.
             */
            name: {
                type: String,
                required: false
            },

            /**
             * Fetch data with url
             */
            url: {
                type: String,
                required: false
            },

            /**
             * The type attribute specifies the type of <strong>input</strong> element to display.
             *
             * <var>text, password, email, number,url, tel</var>
             * <br/><var>date, time, datetime, daterange</var>
             * <br/><var>radio, checkbox, textarea, hidden, code, editor</var>
             * <br/><var>dropdown, multiselect, tags</var>
             *
             */
            type: {
                type: String,
                required: false,
                default: 'text'
            },

            /**
             * The placeholder attribute specifies a short hint that describes the expected value of an input field.
             */
            placeholder: {
                type: String,
                required: false
            },

            /**
             * Model Object that should be passed to the input
             */
            value: {
                required: false
            },

            /**
             * Options for Dropdown, Radio & Checkbox
             */
            options: {
                type: Array,
                required: false
            },

            /**
             * State of the input field based upon validation rules
             *
             * false - highlights the field in red
             * <br/>true - highlights the field in green
             * <br/>null - nothing
             */
            state: {
                type: Boolean,
                required: false,
                default: null
            },

            /**
             * Url from which data should be populated in the input field
             *
             * Applicable for appup-dropdown, appup-multiselect, appup-tags
             */
            url: {
                type: String,
                required: false
            },

            /**
             * Supported extension files to be selected when input type is File
             *
             * Example: ['.jpg', '.pdf', '.docx'] etc..
             */
            supportedFormats: {
                type: Array,
                required: false
            },

            /**
             * @ignore
             */
            disabled: {
                type: Boolean,
                required: false
            },

            /**
             * Flag to check type of add element or valid the value.
             * 
             * `true, false`
             */
            addElement: {
                type: Boolean,
                required: false,
                default: false
            },
             isiframe: {
                type: Boolean,
                required: false,
                default: false
            },
            width :{
                type:String
            },
            height : {
                type:String
            }

            /**
             * Set multiple=true if multiple files should be uploaded
             * when input type is file
             *
             * TODO - seems there is issue with multiple - https://github.com/bootstrap-vue/bootstrap-vue/issues/1526
            multiple: {
                type: Boolean,
                required: false,
                default: false
            },
            */
        },
        data: function() {
            return {
                inputValue: this.value
            }
        },
        watch: {
            value (newVal, oldVal) {
                this.inputValue = newVal;
            }
        },
        computed: {
            isDateComponent: function() {
                return (
                    this.type == 'date'
                    || this.type == 'time'
                    || this.type == 'datetime'
                    || this.type == 'daterange'
                )
            }
        },
        methods: {
            onInput(value) {
                console.log("==> input value :: ", value);
                this.$emit('input', value);
            },
            dynamicAddInput(value, id, type) {
                this.$emit('dynamicAddInput', value, id, type);
            }
        }
    };
</script>
<style>

</style>
