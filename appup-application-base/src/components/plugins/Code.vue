<template>
  <div>
    <appup-form class="p-6 text-left w-75 m-auto max-w-500-px pt-5 pb-5"
              id='form'
              :position="'bottom'"
              :direction="'center'"
              :formFields="[{id: 'name',type: 'text',name: 'Name',label: 'Name',minLength: 1,maxLength: 20,required: true},
                            {id: 'codeType',type: 'dropdown',name: 'Code Type',label: 'Code Type',value: 'java',option: [{value:'java', text: 'Java'}],required: true},
                            {id: 'uploadFile',type: 'file',name: 'Upload File',label: 'Upload File',required: false},
                            {id: 'checkbox',type: 'checkbox',name: 'Confirm',addElement: false,position: 'left',option: [{label: 'I am not a Robot', value: true},],required: true}]"
              :buttons="[{label: 'Save',variant: 'primary',type: 'action',action: [{type: 'validate'},
                                                                                    {type: 'showAlertSuccess',data: 'almost completely done except api'},]}, 
                          {label: 'Cancel',variant: 'default',type: 'reset',function: 'onReset'}]"/>
  </div>
</template>
<script>

export default {
  name: "appup-plugins-code",
};
</script>
<style src="./style/Code.scss" lang="scss"></style>
