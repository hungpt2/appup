<template>
        <div>
            <div class="p-4 text-center" align-v="center">
                <div class="p-4 w-100">
                    <h3>Appup</h3>
                </div>
                <appup-controller />
                <div class="p-4 w-100">
                    <appup-form class="p-6 w-50 m-auto" id='form' :position="'bottom'" :direction="'center'" 
                        :formFields="[{id: 'tenant_id',type: 'hidden',name: 'TENANT_ID', value:'13212317',required: true},
                                        {id: 'email',type: 'email',name: 'Email',placeholder: 'Email',minLength: 1,maxLength: 50,required: true},
                                        {id: 'password',type: 'password',minLength: 1,maxLength: 20,name: 'Password',placeholder: 'Password',required: true}]" 
                        :buttons="[{label: 'Login',variant: 'primary',type: 'action',action: [{type: 'validate'}, 
                                    {type: 'ajax', data: {function:'login', method:'post', url:'http://our.appup.com/login',params:[{key:'TENANT_ID', value: 'TENANT_ID_tenant_id'},{key:'email', value: 'Email_email'},{key:'password', value: 'Password_password'}], success:{function: 'saveLocalstorage', config:['developerId','profileId','username']}, error:'showAlertError'}}, 
                                    {type: 'navigate', data:'home'}]}]" /> 
                    <appup-link label="Sign Up"  linkTo="signup-email" />|<appup-link label="Forgot Your Password ?"  linkTo="forgot-password" />
                </div>
                <div class="p-4 w-100">
                    <div class="text-center">
                        <h5>OR</h5>
                    </div>
                    <div class="text-left pl-4 pb-3">Sign in using</div>
                    <div class="d-flex text-left max-width-450-px" >
                        <div class="pl-4 pr-4" v-for="(item, index) in [{src: 'http://localhost:3000/linkedin.png',alt: 'in', url: 'http://our.appup.com/oauth/', id:'linkedIn'},
                                                    {src: 'http://localhost:3000/github.png',alt: 'git', url: 'http://our.appup.com/oauth/', id:'gitHub'},
                                                    {src: 'http://localhost:3000/google-plus.png',alt: 'gogle plus', url: 'http://our.appup.com/oauth/', id:'google'},    
                                                    {src: 'http://localhost:3000/facebook.png',alt: 'facebook', url: 'http://our.appup.com/oauth/', id:'facebook'}]" :key="index">
                        <a target="_blank" :href="item.url + item.id" >
                        <appup-image
                            :src="item.src"  
                            :alt="item.alt"
                            :height="50"
                            :width="50"
                            align="center"
                            :action="item.action" /> 
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  data() {
    return {
      showDismissibleAlert: false
    };
  },
  computed: {},
  methods: {}
};
</script>
