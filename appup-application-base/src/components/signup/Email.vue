<template>
  <div class="h-100">
    <div class="p-4 m-0 d-flex" align-v="center">
      <table class="w-100">
        <tbody>
          <td class="w-60">
            <div>
              <appup-image  class="image w-100 pr-4 h-100-vh"
                :src="'appup-signup.png'"    
                :height="4096"
                :width="4096"
                /> 
            </div>
          </td>
          <td class="w-40">
            <div>
              <div class="pt-4 pb-4  max-w-500 m-auto">
                <h3>Getting started</h3>
              </div>
              <appup-form class="p-6 text-left max-w-500 m-auto"
                id='form'
                :position="'bottom'"
                :direction="'center'"
                :formFields="[{id: 'email',type: 'email',name: 'Email',label: 'Enter your email address',placeholder: 'Enter Email',required: true}]"
                :buttons="[{label: 'Continue',variant: 'primary',type: 'action',
                            action: [{type: 'validate'},
                                      {type: 'setLocalstorage',data: {key: 'getting-started-email', value:'Email_email'}},
                                      {type: 'navigate',data: 'signup-details'}]}]"/>
            </div>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "appup-signup-email",
};
</script>
<style src="./style/Email.scss" lang="scss"></style>
