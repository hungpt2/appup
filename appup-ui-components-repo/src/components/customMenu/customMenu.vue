<template>
    <b-row class="border-0 p-0">
        <b-col v-for="(btn, index) of item" :key="index" class="p-0" :class="sidebar? 'col-12':''">
          <appup-button  
                :size="btn.size" :customClass="'rounded-0 w-100'"
                :buttonStyle="btn.type ==='header' ? 'light' : $route.path.includes(btn.link) && !customStyle?'primary':'secondary'"
                :customStyle="$route.path.includes(btn.link) && customStyle?activeItemStyle:itemStyle" :label="btn.label"
                @click="btn.type !=='header' ? $router.push(btn.link) : ''"/>
        </b-col>
    </b-row>
</template>
<script>
/**
 * Appup Alert component which can be used to display success error messages
 */
export default {
  name: "appup-custom-menu",
  props: {
    /**
     * Id of input elements.
     */
    id: {
      type: String,
      required: false
    },

    /**
     * type of menu.
     * sidebar(true) or sub-menu(false)
     */
    sidebar: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * list item of menu.
     */
    item: {
      type: Array,
      required: true,
      default: []
    },

    /**
     * check has custom style item of menu.
     */
    customStyle: {
      type: Boolean,
      default: false
    },

    /**
     * class item of menu.
     */
    itemStyle: {
      required: false,
      default: "btn-primary"
    },

    /**
     * class active item of menu.
     */
    activeItemStyle: {
      required: false,
      default: "btn-secondary"
    }
  },
  watch: {
    value(newVal) {
      console.log(newVal);
    }
  },
  mounted() {},
  data: function() {
    return {};
  },
  methods: {}
};
</script>
