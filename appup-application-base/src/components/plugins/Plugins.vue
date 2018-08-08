<template>
    <div class="appup-plugins">
        <div class="text-left p-3 background-color-eeeeee">
          <appup-breadcrumbs class="background-color-initial mb-0 p-0 w-50 float-left min-w-350-px line-height-38"  
            :items="[{text: 'Default',href: '#'}, 
            {text: 'Contacts',href: '#'}, 
            {text: 'Developers',href: '#'}, 
            {text: 'Backend',href: '#'}, 
            {text: 'Plugins',active: true}]" />
          <div class="w-50 float-right">
            <appup-input 
              class="w-50 float-right min-w-150-px max-w-200-px pr-2"
              id="header-dropdown-left"
              value='frontend'
              :options="[{value: 'frontend', text: 'Frontend'}]"
              :type="'dropdown'" />
            <appup-input
              class="w-50 float-right min-w-150-px max-w-200-px pr-2"
              id="header-dropdown-right"
              value='backend'
              :options="[{value: 'backend', text: 'Backend'}]"
              :type="'dropdown'" />
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="m-1 mt-3 mb-3 d-flex border-2-cccccc">
          <div class="sidebar-plugins border-right-2-cccccc">
            <appup-custom-menu :id="'menu'" :sidebar="true"  class="m-0"
              :item="[{link:'categories' ,id: 'categories',label: 'Categories',size: 'medium', type:'header'},
                      {link:'databases' ,id: 'databases',label: 'Databases',size: 'medium',},
                      {link:'even-servers' ,id: 'even-servers',label: 'Even Servers',size: 'medium',},
                      {link:'mail-servers' ,id: 'mail-servers',label: 'Mail Servers',size: 'medium',},
                      {link:'oauth-servers' ,id: 'oauth-servers',label: 'OAuth Servers',size: 'medium',},
                      {link:'identity-servers' ,id: 'identity-servers',label: 'Identity Servers',size: 'medium',},
                      {link:'code' ,id: 'code',label: 'Code',size: 'medium'}]"/>
          </div>
          <div class="content-plugins">
            <router-view></router-view>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "appup-dashboard",
};
</script>
<style src="./style/Plugins.scss" lang="scss"></style>
