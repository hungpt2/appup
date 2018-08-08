<template>
    <div class="appup-preferences">
      <div>
        <appup-header :title="{name: 'Preferences'}" :left-controls="[]" :right-controls="[]"/>
      </div>
      <div class="m-3">
        <appup-custom-menu :id="'menu'" :sidebar="false" :item="[{id: 'settings', link: '/preferences/settings',label: 'Settings',size: 'medium',},
                                                                  {id: 'password', link: '/preferences/password',label: 'Password',size: 'medium',},
                                                                  {id: 'collaborators', link: '/preferences/collaborators',label: 'Collaborators',size: 'medium',},
                                                                  {id: 'billings', link: '/preferences/billings',label: 'Billings',size: 'medium',}]"/>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>
<script>

export default {
  name: "appup-dashboard",
};
</script>
<style src="./style/Preference.scss" lang="scss"></style>
