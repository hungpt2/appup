<template>
    
     <div v-if="!isiframe"
        v-html=htmlCode
        class="appup-html" > 

        
    </div>
    <div v-else
        
        class="appup-html iframe" >
        <iframe :src="url" :width="width" :height="height"></iframe>
    </div>
</template>

<script>
/**
 * Component to display HTML content that is provided
 *
 */
export default {
  name: "app-html",
  props: {
    /**
     * Content to be displayed
     */
    content: {
      type: String
    },
    url: {
      type: String
    },
    isiframe: {
      type: Boolean
    },
    width:{
      type: String
    },
    height:{
      type:String
    }
  },
  data: function() {
    return {
      htmlCode: this.content
    };
  },
  created() {},
  methods: {}
};
</script>