<template>
    <div>
      <appup-icon name="file" ></appup-icon><br/>
      <appup-icon name="address-card" ></appup-icon><br/>
      <appup-icon name="address-book" :size="size30"></appup-icon><br/>
      <appup-icon name="edit" :size="size50"></appup-icon><br/>
    </div>
</template>
<script>
export default {
    data () {
        return {
          size17: 17,
          size30: 30,
          size50: 50 
        }
    },
    computed: {
        
    },
    methods: {
            
    }
}
</script>
