<template>
  <div>
    <div class="p-4 m-0 text-center" align-v="center">
      <div class="p-4 w-100">
        <appup-form class="p-6 text-left w-75 m-auto max-w-500" id='form' :position="'bottom'" :direction="'center'" 
          :formFields="[{id: 'checkbox',type: 'checkbox',name: 'Users',label: 'Users',option: [{label: 'Sercure my cloud',value: 'sercure-my-cloud',},
                                                                                              {label: 'Allow users form - domain',value: 'allow-users-from-domain',}],}]" />
        <appup-list-item class="p-6 text-left w-75 m-auto max-w-500" :listItem="['123@xyz.com', 'Email2']" :title="'List'" />
        <appup-form class="p-6 text-left w-75 m-auto max-w-500" id='form' :position="'bottom'" :direction="'center'" 
          :formFields="[{id: 'confirm',type: 'checkbox',name: 'Confirm',addElement: false,position: 'left',option: [{label: 'I am not a Robot', value: true},],required: true}]" 
          :buttons="[{label: 'Cancel',variant: 'default',type: 'reset',function: 'onReset'}, 
                      {label: 'Save',variant: 'primary',type: 'action',validate: true,action: {type: 'navigate',data: 'signup-confirmation'}}]"/>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "appup-app14-users",
}
</script>
<style src="./style/User.scss" lang="scss"></style>
