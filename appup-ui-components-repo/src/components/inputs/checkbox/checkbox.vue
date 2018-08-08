<template>
    <b-form-checkbox-group 
        :id=id
        class="appup-checkbox"
        :options=checkboxGroupOptions
        :state=state
        v-model=selected
        @change="onSelect"
    >
    </b-form-checkbox-group>
</template>
<script>
    import { Conversions } from '@/mixins/conversions'
    
    /**
     * Appup Checbox - Can be used for single or group checboxes
     */
    export default {
        name: 'appup-checkbox',
        mixins: [Conversions],
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
             * Options that should be displayed in checkbox group
             * 
             * Array should include objects with label & value properties
             */
            options: {
                type: Array,
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
             * Value for v-model binding. Not to be binded directly
             */
            value: {
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
            }
        },
        data: function() {
            return {
                checkboxGroupOptions: [],
                selected: this.value==='' ? [] : this.value // Must be an array reference!
            }
        },
        created: function() {
            
            if(this.options && this.options.length > 0) {
                this.checkboxGroupOptions 
                    = this.convert_Options_To_BootstrapVue_Options(this.options);
            }            
        },
        watch: {
            options (newVal, oldVal) {
                if(newVal && newVal.length > 0) {
                    this.checkboxGroupOptions 
                        = this.convert_Options_To_BootstrapVue_Options(newVal);
                } 
            }
        },
        methods: {
            onSelect(selected) {
                this.$emit('input', selected)
                let result = [];
                selected.forEach(item => {
                    this.options.forEach(element => {
                        if(element.value === item) {
                            result.push(element)
                        }
                    })
                })
                if (this.addElement) {
                    this.$emit('checkboxChange', result, this.id, 'checkbox')
                }
            }
        }
    };
</script>