<template>
  <div>
    
    <div class="p-4 m-0 d-flex" align-v="center">
      <table class="w-100">
        <tbody>
          <td class="w-60">
            <div>
              <appup-image  class="image w-100 pr-4"
                :src="'appup-signup.png'"    
                :height= windowHeight*0.95
                :width=720
                /> 
                <appup-image class="image-more" 
                              :src="'test.png'"
                              :height="250"
                              :width="250"/>
            </div>
          </td>
          <td class="w-40">
            <div class="col-12 p-5">
                <appup-alert :message="messageAlert" :alertType="typeAlert" :show="showAlert" @dismissed="showAlert=false"></appup-alert>
            </div>
            <div>
              <div class="pt-4 pb-4  max-w-500 m-auto">
                <h3>Forgot Password</h3>
              </div>
              <appup-form class="p-6 text-left max-w-500 m-auto"
                id='form'
                :position="'bottom'"
                :direction="'center'"
                :formFields="[{id: 'email',type: 'email',name: 'Email',label: 'Enter your email address',placeholder: 'Enter Email',required: true},{id: 'checkbox',type: 'checkbox',name: 'Confirm',addElement: false,position: 'right',option: [{label: 'I am not a Robot', value: true},],required: true}]"
                :buttons="[{label: 'Continue',variant: 'primary',type: 'action',function: doResetPwd,validate: true,action: {type: 'ajax',data: 'signup-confirmation'}}]"/>
            </div>
          </td>
        </tbody>
      </table>
    </div>

  <!-- @ok="directTo" -->
    <appup-modal
        :id="'forgot-pasword'"
        :title="'Forgot Password'"
        size="large"
        type="message"
        okLabel="OK">
        <div class="text-center">
          <div>Your new password is sent to email !</div>
        </div>
    </appup-modal>
  </div>
</template>
<script>
import { ForgotPassword } from "@/mixins/forgot-password";
import {BASE_API} from '@/commons/api'

export default {
  name: "appup-forgot-password",
  mixins: [ForgotPassword],
  data: function() {
    return {
      showAlert: false,
      typeAlert: 'failure',
      messageAlert: '',
      windowHeight: 0
    };
  },
  mounted() {
    let that = this;
    this.$nextTick(function() {
      that.windowHeight = window.innerHeight;
      window.addEventListener("resize", function() {
        that.windowHeight = window.innerHeight;
      });
    });
  },
  methods: {
    doResetPwd(form) {
      console.log("forgot pwd", form);
      this.forgotPwd(
        BASE_API.forgotPwd,
        {
          email: form["Email_email"]
        },
        success => {
          if (success.data.split('"')[3] === "failure") {
            this.$root.$emit("bv::show::modal", "forgot-pasword");
          } else {
            this.showAlert = true;
            this.messageAlert = "Success";
          }
        },
        error => {
          console.log(error);
          this.messageAlert = "Warn";
          this.showAlert = true;
          // this.$router.push('/signup-email')
        }
      );
      
    },
    directTo() {
      this.$router.push("/signup-confirmation");
    }
  }
};
</script>
<style src="./ForgotPassword.scss" lang="scss"></style>
