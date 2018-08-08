<template>
    <div class="appup-plugins">
        <div class="text-left p-3 background-color-eeeeee mt-4">
          <appup-breadcrumbs class="background-color-initial mb-0 p-0 w-50 float-left min-w-350-px line-height-38"  
            :items="[{text: 'Default',href: '#'}, 
            {text: 'Contacts',href: '#'}, 
            {text: 'Developers',href: '#'}]" />
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
        <div class="m-1 mt-3 mb-3">
            <div align-h="center" class="mt-5 d-flex">
        <table class="w-50 m-auto">
          <tbody>
            <td>
              <div class="w-50 text-center m-auto">
                <appup-input
                class="w-50 float-right min-w-150-px max-w-200-px pr-2"
                id="header-dropdown-right"
                value='backend'
                :options="[{value: 'backend', text: 'Backend'},
                {value: 'workflow', text: 'Workflow'},
                {value: 'trigger', text: 'Trigger'},
                {value: 'plugins', text: 'Plugins'}]"
                :type="'dropdown'" />
              </div>
            </td>
            <td>
              <div class="w-50 text-center m-auto" align-self="center">
                <appup-input 
                class="w-50 float-right min-w-150-px max-w-200-px pr-2"
                id="header-dropdown-left"
                value='frontend'
                :options="[{value: 'frontend', text: 'Frontend'},
                {value: 'fieldSchema', text: 'Field Schema'},
                {value: 'blocks', text: 'Blocks'},
                {value: 'pages', text: 'Pages'}]"
                :type="'dropdown'" />
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "appup-app-23",
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
<style src="./style/App23Layout.scss" lang="scss"></style>
