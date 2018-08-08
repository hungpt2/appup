<template>
  <div :class="{ 'invalid' : isInvalid}">
    <vue-multiselect 
        :id=id
        :multiple="true"
        class="appup-multiselect"
        v-model=selectedObjects
        track-by="value"
        label="text" 
        :placeholder=placeholder 
        :options=dropdownItems
        :searchable="true" 
        :allow-empty="false"
    >
    </vue-multiselect>
  </div>
</template>
<script>
    import { AjaxRequests } from '@/mixins/ajaxRequests'
    import { Conversions } from '@/mixins/conversions'

    /**
     * Appup Multiselect to load static options or dynamic options from API call
     */
    export default {
        name: 'appup-multiselect',
        mixins: [AjaxRequests, Conversions],
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
             * Options that should be displayed in the dropdown
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
             * Url from which data should be populated in dropdown
             */
            url: {
                type: String,
                required: false
            },

            /**
            * Placeholder if needed 
            */
            placeholder: {
                type: String,
                required: false,
                default: ''
            },
        },
        data: function() {
            return {
                dropdownItems: [],
                selectedObjects: [],
                selectedValues: [],
            }
        },
        computed: {
            isInvalid() {
                return (this.state === null || this.state) ? false : true
            }
        },
        watch: {
            selectedObjects(newValues) {
                this.selectedValues = newValues.map(obj => obj.value);

                this.$emit('input', this.selectedValues)
            }
        },
        created: function() {
            
            // Convert options to b-form-select specific
            if(this.options && this.options.length > 0) {
                this.dropdownItems 
                    = this.convert_Options_To_BootstrapVue_Options(this.options);
            }            
        },
        mounted: function() {
            var $s = this;

            // If url exists, load dropdown options from url
            if($s.url) {
                
                /*
                 * TODO: Add first element to the dropdown as null
                $s.dropdownItems.push(0,{
                    text: 'Please select',
                    value: null
                });
                */

                // Load data from url to dropdown
                $s.getData($s.url, null, (resonpse) => {
                    $s.dropdownItems 
                        = $s.convert_Options_To_BootstrapVue_Options(resonpse.data);
                });
            }
        },
        methods: {
            
        }
    };
</script>