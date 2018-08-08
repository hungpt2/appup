<template>
  <div class="mt-2 mr-5 ml-5">
    <div class="mt-3">
      <div class="label-custom">Cloud Type</div>
      <div class="d-flex mt-2">
        <div v-for="(item, index) in [{id: 'appup',label: 'Appup'},{id: 'amazon',label: 'Amazon'},{id: 'google',label: 'Google'},{id: 'digital_ocean',label: 'Digital Ocean'}]" :key="index" @click="cloudType=item.id" class="cursor-poiter border-black text-center p-2" :id="item.id"
              :class="{'menu-active': item.id===cloudType, 
                        'shadow-item-last': index===3,
                        'shadow-item': index!==3}">
          {{item.label}}
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="label-custom">Server</div>
      <div class="mt-2 d-flex">
        <div v-for="(item, index) in [{id: 'micro',cost: '39',unit: 'month/server',label: 'Micro'},{id: 'mini',cost: '49',unit: 'month/server',label: 'Mini'},{id: 'regular',cost: '99',unit: 'month/server',label: 'Regular'},{id: 'scale',cost: '149',unit: 'month/server',label: 'Scale'},{id: 'large',cost: '299',unit: 'month/server',label: 'Large'}]" 
              :key="index" @click="serverType=item.id" class="cursor-poiter text-center p-2 w-20"  :id="item.id">
          <div :class="{'menu-active': item.id===serverType}" class=" border-black">
            <b>{{item.label}}</b>
          </div>
          <div>
            <b>${{item.cost}}</b>
          </div>
          <div>{{item.unit}}</div>
        </div>
      </div>

    </div>
    <div class="mt-3">
      <div class="label-custom">Custom URL</div>
      
    </div>
    <div class="mt-3">
      <div class="label-custom">Scaling Options</div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "appup-app14-setup",
  props: {},
  data: function() {
    return {
      cloudType: "appup",
      serverType: ""
    };
  },
};
</script>
<style src="./style/Setup.scss" lang="scss"></style>
