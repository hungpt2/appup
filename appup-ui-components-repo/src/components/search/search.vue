<template>
    <div class="form-control d-flex">
      <appup-icon :name="icon" :size="18" class="mt-1" :class="iconClass"></appup-icon>
      <b-form-input class="border-0 p-0 pl-2"
      :id="'search-'+id"
      :placeholder="placeholder"
      v-model="searchValue"
      @input="onInput" />
    </div>
</template>
<script>
    /**
     * Appup Alert component which can be used to display success error messages
     */
    export default {
        name: 'appup-search',
        props: {

            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false,
            },

            /**
             * placeholder of input elements.
             */
            placeholder: {
                type: String,
                required: false,
                default: 'Search'
            },

            /**
             * icon of input elements.
             */
            icon: {
                type: String,
                required: false,
            },

            /**
             * Model Object that should be passed to the input
             */
            value: {
                required: false
            },

            /**
             * Custom class for icon
             */
            iconClass: {
                type: String,
                required: false,
            },

            /**
             * time to delay search
             */
            delay: {
                type: Number,
                required: false,
                default: 0
            },

        },
        watch: {
          value (newVal) {
            console.log(newVal)
          }
        },
        mounted() {
        },
        data: function() {
            return {
              searchValue: this.value,
              delayValue: undefined
            }
        },
        methods: {
          onInput(value) {
              console.log('delay', this.delay)
              if (this.delayValue) {
                clearTimeout(this.delayValue)
              }
              this.delayValue = setTimeout(() => {
                console.log("==> search value :: ", value);
                this.$emit('input', value);
              }, this.delay);
          },
        },
    };
</script>
