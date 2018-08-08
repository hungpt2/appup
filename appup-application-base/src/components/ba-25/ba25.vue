<template>
  <div class="ba-25">
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
        <div class="mt-3 mb-2">
          <appup-custom-menu class="ml-3 mr-3" :id="'menu'" :sidebar="false"  :customStyle="true" 
            :itemStyle="{'border-bottom': '3px solid #dcddde','color': '#7c7c7d','background-color': '#fff','border-top': '0','border-left': '0','border-right': '0','font-weight': '450','height': '50px'}" 
            :activeItemStyle="{'border-bottom': '3px solid #343a40','color': '#0069D9','background-color': '#fff','border-top': '0','border-left': '0','border-right': '0','font-weight': '450','height': '50px'}" 
            :item="[{id: 'rest', link: '/ba-25/rest',label: 'Rest',size: 'medium',},
                    {id: 'cron', link: '/ba-25/cron',label: 'Cron',size: 'medium',},
                    {id: 'event', link: '/ba-25/event',label: 'Event',size: 'medium',}]"/>
        </div>
        <div>
            <router-view></router-view>
          </div>
  </div>
</template>
<script>

export default {
  name: "appup-ba-25",
  data: function() {
    return {
    };
  },
};
</script>
<style src="./style/ba25.scss" lang="scss"></style>

