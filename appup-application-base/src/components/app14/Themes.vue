<template>
  <div>
    <div>
      <div align-h="center" class="row mr-5 mt-5 ml-5 mb-2">
        <div align-self="center" class="text-right col col-4 line-height-38">
          Choose Theme
        </div>
        <div class="col col-8">
          <appup-input
                class="max-width-500"
                :id="'input_choose_theme'"
                :name="'Choose Theme'"
                :type="'dropdown'"
                :options="[{ value: 'a', text: 'This is First option' },{ value: 'b', text: 'This is Second option' }]"
                :placeholder="'Appup theme'"
                @input="onInput" />
        </div>
    </div>
    </div>
    <div class="ml-5 mr-5 pr-3 text-right" @click="show=!show">
      <div align-h="center" class="row">
          <div align-self="center" class="text-right col col-4">
          </div>
          <div class=" col col-8">
            <div class="max-width-500">
              {{show ? 'Hide Advanced Options' : 'Show Advanced Options'}}
            </div>
          </div>
      </div>
      
    </div>
    <div v-show="show" class="mt-2 mr-5 ml-5">
      <div class="pt-3 custom-label-themes max-width-1000 m-auto">Custom CSS</div>
      <div>
        <appup-input
                class="max-width-1000 m-auto"
                id='custom-css'
                row="10"
                name="Custom CSS"
                type="textarea" />
      </div>
      <div class="pt-3 custom-label-themes max-width-1000 m-auto">Apps Layout</div>
      <div>
        <appup-input
                class="max-width-1000 m-auto"
                id='apps-layout'
                row="10"
                name="Apps Layout"
                type="textarea" />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "appup-collaborators",
  data: function() {
    return {
      show: false,
    };
  },
  methods: {
    onInput(e) {
        console.log("---> on input : "+e, this.errors, this.form);
    },
  },
};
</script>
<style src="./style/Theme.scss" lang="scss"></style>
