<template>
  <div>
    <appup-form class="p-6 text-left w-75 m-auto max-w-500-px pt-5 pb-5" id='form' 
      :position="'bottom'" :direction="'center'" 
      :formFields="[
        {id: 'name',type: 'text',name: 'Name',label: 'Name',required: true},
        {id: 'assign',type: 'dropdown',name: 'Asign to Category',label: 'Asign to Category',value: '',option:[{value:'', text: 'Default'}],required: true},
        {id: 'method',type: 'dropdown',name: 'Method',label: 'Method',value: 'get',option:[{value:'get', text: 'GET'}],required: true},
        {id: 'expression',type: 'text',name: 'expression',label: 'expression',positionHints:'left',hints:'Some help text comes here',required: true},
        {id: 'execute',type: 'dropdown',name: 'What is Execute',label: 'What is Execute',value: '',option:[{value:'', text: 'New Contact Added'}],required: true},
        {id: 'checkbox',type: 'checkbox',name: 'Confirm',addElement: false,position: 'left',option: [{label: 'I am not a Robot', value: true},],required: true}]" 
        :buttons="[{label: 'Create Trigger',variant: 'primary',type: 'action',action: [{type: 'validate'},
                                                                                      {type: 'showAlertSuccess',data: 'almost completely done except api'}]}, 
                    {label: 'Cancel',variant: 'default',type: 'action',action: [{type: 'navigate', data: 'ba-25/rest'}]}]"/></div>
</template>
<script>

export default {
  name: "appup-ba-26",
  data: function() {
    return {
    };
  },
};
</script>
