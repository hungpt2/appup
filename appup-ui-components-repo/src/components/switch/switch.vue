<template>
    <label class="switch m-0">
      <input class="d-none" type="checkbox" v-model="inputValue" @click="onSwitch()">
      <span class="slider round"></span>
    </label>
</template>
<script>
    /**
     * Appup Icon component which can be used to display symbol
     */
    export default {
        name: 'appup-switch',
        props: {

            /**
             * Id of icon elements.
             */
            id: {
                type: String,
                required: false,
            },

            /**
             * Can be used to call http request
             */
            url: {
                type: String,
                required: false
            },

            /**
             * Type of Alert Message
             * 
             * `info, warn, success, failure`
             */
            value: {
                type: Boolean,
                default: false,
            }
        },
        watch: {
            value (newVal, oldVal) {
                this.inputValue = newVal;
            }
        },
        data: function() {
            return {
                inputValue: false
            }
        },
        mounted() {
          if (this.url) {
            console.log('has url -> do something')
          }
        },
        methods: {
          onSwitch() {
            console.log('switch')
            this.$emit('onSwitch', this.value, this.url)
          }
        },
    };
</script>
<style lang="sass">
.switch 
  position: relative
  display: inline-block
  width: 30px
  height: 17px

.switch input 
  display:none

.slider 
  position: absolute
  cursor: pointer
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: #ccc
  -webkit-transition: .4s
  transition: .4s

.slider:before 
  position: absolute
  content: ""
  height: 13px
  width: 13px
  left: 2px
  bottom: 2px
  background-color: white
  -webkit-transition: .4s
  transition: .4s


input:checked + .slider 
  background-color: #6AA84F


input:focus + .slider 
  box-shadow: 0 0 1px #6AA84F


input:checked + .slider:before 
  -webkit-transform: translateX(13px)
  -ms-transform: translateX(13px)
  transform: translateX(13px)


/* Rounded sliders */
.slider.round 
  border-radius: 17px


.slider.round:before 
  border-radius: 50%
</style>

