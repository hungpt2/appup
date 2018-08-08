import _ from 'lodash';

/**
 * @mixin
 * 
 * Conversions specific to data that should be send to components or receive from components
 */
export const Conversions = {
    methods: {
        /**
         * @param {options} options
         * 
         * Appup Options will be array of objects with Label & Value
         * 
         * These should be converted to Text & Value when feeding to bootstrap-vue components
         * such as dropdown, radio group & checkbox group components
         */
        convert_Options_To_BootstrapVue_Options: function(options) {
            var bootstrapOptions = [];
            
            if(options && options.length > 0) {
                options.forEach(function (value, key) {
                    bootstrapOptions.push({
                        text: value.label,
                        value: value.value,
                        disabled: value.disabled
                    });
                });
            }

            return bootstrapOptions;
        }
    }
};