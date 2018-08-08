<template>
  <div>
    <div class="p-4 text-center" align-v="center">
          <div class="p-4 w-100">
            <h3>Complete your details</h3>
          </div>
          <div class="p-4 w-100">
            <appup-form class="p-6 text-left w-50 m-auto"
              id='form'
              :position="'bottom'"
              :direction="'center'"
              :formFields="[{id: 'email',type: 'hidden',name: 'Email',function:'getLocalstorage',key:'getting-started-email',required: true},
                            {id: 'first_name',type: 'text',name: 'First Name',placeholder: 'First Name',required: true},
                            {id: 'last_name',type: 'text',name: 'Last Name',placeholder: 'Last Name',required: true},
                            {id: 'password',type: 'password',minLength: 6,maxLength: 20,name: 'Password',placeholder: 'Password',required: true},
                            {id: 'checkbox',type: 'checkbox',name: 'Confirm',addElement: false,option: [{label: 'I am not a Robot', value: true},],required: true}]"
              :buttons="[{label: 'Continue',variant: 'primary',type: 'action',action: [{type: 'validate'},
                                                                                        {type: 'ajax', data: {function:'signup', method:'post', 
                                                                                                                url:'https://my.appup.com/register',
                                                                                                                params:[{key:'email', value: 'Email_email'},
                                                                                                                        {key:'first_name', value: 'First Name_first_name'},
                                                                                                                        {key:'last_name', value: 'Last Name_last_name'},
                                                                                                                        {key:'password', value: 'Password_password'}], 
                                                                                                                error:'showAlertError'}},
                                                                                        {type: 'navigate', data: 'signup-confirmation'}]}]"/>
          </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "appup-signup-details",
};
</script>
