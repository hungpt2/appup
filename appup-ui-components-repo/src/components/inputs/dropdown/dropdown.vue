<template>
  <div>
    <b-form-select
        :id=id
        class="appup-dropdown"
        :options=dropdownItems
        :state=state
        v-model=selected
        @change="onSelect"/>
  </div>
</template>
<script>
    import { AjaxRequests } from '@/mixins/ajaxRequests'
    import { Conversions } from '@/mixins/conversions'
    const prefixCls = 'appup-dropdown';
    /**
     * Appup Dropdown to load static options or dynamic options from API call
     *
     * TODOs:
     *
     * Dynamic Options from API call
     */
    export default {
        name: 'appup-dropdown',
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
        watch: {
            options (newVal, oldVal) {
                if(this.newVal && this.newVal.length > 0) {
                    this.dropdownItems = this.convert_Options_To_BootstrapVue_Options(newVal);
                }
            }
        },
        mounted() {
            this.loadData();
        },
        data: function() {
            return {
                dropdownItems: [],
                selected: this.value
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
            } else {
                $s.dropdownItems = $s.options;
            }
        },
        methods: {
            onSelect(selected) {
                this.$emit('input', selected)
                if (this.addElement) {
                    this.dropdownItems.forEach(element => {
                        if(element.value === selected) {
                            this.$emit('dropdownChange', element, this.id, 'dropdown')
                            return
                        }
                    });
                }
            },
            loadData() {
                // get options dropdown with url
                console.log('url', this.url)
                if (this.url) {
                    this.getDropdownData(this.url, {}, (response) => {
                        this.options = response;
                    })
                }
            }
        }
    };
</script>
