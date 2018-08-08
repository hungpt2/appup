<template>
    <div class="appup-app14">
        <div class="appup-app14-header mt-4">
          <div class="line-height-69 float-left">
            <b class="mr-2 ml-4 header-label">Default</b>
            <appup-switch/>
            <span class="ml-2">appid1.appup.com</span> 
            <appup-icon class="text-dark ml-2" name="edit" />
          </div>
          <div class="d-flex float-right">
            <div class="menu-right w-25 h-100 line-height-69 text-center min-width-70" v-for="(item, index) in [{id: 'apps',label: 'Apps'}, 
                                                                                                              {id: 'users',label: 'Users'}]" 
                                                                                        :key="index" :class="{'active': item.id === active}"
              @click="$router.push('/app-14/' + item.id)" >
              <b>{{item.label}}</b>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div>
          <router-view></router-view>
        </div>
    </div>
</template>
<script>

export default {
  name: "appup-app-14",
  data: function() {
    return {
      active: '',
    };
  },
  watch: {
    '$route' (to) {
      this.active = to.path.split('/')[2]
      console.log(this.active)
    }
  },
  mounted() {
    this.active = this.$route.path.split('/')[2]
      console.log(this.active)
  }
};
</script>
<style src="./style/App14Layout.scss" lang="scss"></style>
