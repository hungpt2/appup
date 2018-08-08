<template>
<div>
    <flat-pickr 
        :id=id
        class="appup-datetime form-control"
        :class="{'border border-danger': state==false }"
        v-model="date"
        :config="config"
        >
    </flat-pickr>
</div>
</template>
<script>
    /**
     * Appup DateTime picker with capability to show only date, time or date & time
     */
    export default {
        name: 'appup-datetime',
        props: {
            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false
            },

            /**
             * The type attribute specifies the type of <strong>input</strong> element to display.
             * 
             *  `date, time, datetime, daterange`
             */
            type: {
                type: String,
                required: true
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
            }
        },
        data: function() {
            return {
                // Initial value
                date: this.value
            }
        },
        computed: {
            // Get more form https://chmln.github.io/flatpickr/options/
            config: function() {
                const _ = this;
                return {
                    wrap: true, // set wrap to true only when using 'input-group'
                    onChange: (date) => {
                        console.log(date)
                        this.$emit('input', date)
                    },
                    altFormat: 'M	j, Y',
                    altInput: false,
                    enableTime:
                        _.type == 'time' || _.type == 'datetime' ? true : false,
                    noCalendar:
                        _.type == 'time' ? true : false,
                    dateFormat: 
                        _.type == 'date' || _.type == 'daterange' ? 'd-m-Y'
                            : _.type == 'time' ? 'H:i:S' : 'd-m-Y H:i:S',
                    mode:
                        _.type == 'daterange' ? 'range' : 'single'
                }       
            }
        },
        methods: {
        },
        components: { 
        }
    };
</script>
<style>

</style>
