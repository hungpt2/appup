<template>
  <div>
    <appup-form class="p-6 text-left w-75 m-auto max-w-500-px pt-5 pb-5" id='form' 
      :position="'bottom'" :direction="'center'" 
      :formFields="[{id: 'pluginName',type: 'text',name: 'Plugin Name',label: 'Plugin Name',minLength: 1,maxLength: 20,required: true},
                    {id: 'description',type: 'textarea',name: 'Description',label: 'Description',minLength: 1,maxLength: 20,required: true},
                    {id: 'host',type: 'text',name: 'Host',label: 'Host',minLength: 1,maxLength: 20,required: true},
                    {id: 'port',type: 'text',name: 'Port',label: 'Port',minLength: 1,maxLength: 20,required: true},
                    {id: 'databaseName',type: 'text',name: 'Database Name',label: 'Database Name',minLength: 1,maxLength: 20,required: true},
                    {id: 'codeType',type: 'dropdown',name: 'Code Type',label: 'Code Type',value: 'sid',option:[{value:'sid', text: 'SID'}],required: true},
                    {id: 'username',type: 'text',name: 'Username',label: 'Username',minLength: 1,maxLength: 20,required: true},
                    {id: 'password',type: 'text',name: 'Password',label: 'Password',minLength: 1,maxLength: 20,required: true},
                    {id: 'checkbox',type: 'checkbox',name: 'Confirm',addElement: false,position: 'left',option: [{label: 'I am not a Robot', value: true},],required: true}]" 
        :buttons="[{label: 'Create Plugin',variant: 'primary',type: 'action',action: [{type: 'validate'},
                                                                                      {type: 'showAlertSuccess',data: 'almost completely done except api'}]}, 
                    {label: 'Cancel',variant: 'default',type: 'action',action: [{type: 'navigate', data: 'plugins/databases'}]}]"/></div>
</template>
<script>

export default {
  name: "appup-plugins-databases",
  props: {

  },
  data: function() {
    return {
    };
  },
  computed: {},
  methods: {
    doSave(form) {
      console.log('do save', form)
    }
  },
  mounted() {
  },
};
</script>
<style src="./style/Database.scss" lang="scss"></style>
