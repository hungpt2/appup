<template>
  <div>
    <div class="p-4 text-center" align-v="center">

      <div class="p-4 w-100">
        <h3>Appup</h3>
      </div>
      
      <div class="p-4 w-100">
        <appup-form class="p-6 w-50 m-auto" id='form' :position="'bottom'" :direction="'center'" 
        :formFields="[{id: 'tenant_id',type: 'hidden',name: 'TENANT_ID', value:'13212317',required: true},
                        {id: 'email',type: 'email',name: 'Email',placeholder: 'Email',minLength: 1,maxLength: 50,required: true},
                        {id: 'password',type: 'password',minLength: 1,maxLength: 20,name: 'Password',placeholder: 'Password',required: true},
                        {id: 'link',component: 'appup-link',name: 'Link',position: 'left',option: {label: 'Forgot your password ?',linkTo: 'forgot-password',required: true}}]" 
        :buttons="[{label: 'Login',variant: 'primary',type: 'action',
                        action: [{type: 'validate'}, 
                                  {type: 'ajax', data: {function:'login', method:'post', url:'https://my.appup.com/login',params:[{key:'TENANT_ID', value: 'TENANT_ID_tenant_id'},{key:'email', value: 'Email_email'},{key:'password', value: 'Password_password'}], success:{function: 'saveLocalstorage', config:['developerId','profileId','username']}, error:'showAlertError'}}, 
                                  {type: 'navigate', data:''}]}]" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "appup-login",
};
</script>
<style src="./Login.scss" lang="scss"></style>
