<template>
    <div>
      <appup-search 
      :size="18" :icon="'search'" 
      :value="search"
      :delay="1000" />
      <br/>
      search value : {{search}}
    </div>
</template>
<script>
export default {
    data () {
        return {
            search: ''
        }
    },
    computed: {
        
    },
    methods: {
    }
}
</script>
